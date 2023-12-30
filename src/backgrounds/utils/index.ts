import { FORMATTERS } from "~menu"

export const generateContextMenuWithArray = (options) => {
  Object.keys(options).map((key) => {
    generateContextMenu({ id: key, title: options[key].title })
  })
}

export const generateContextMenu = (options) => {
  chrome.contextMenus.create({
    ...options,
    contexts: ["page", "selection"]
  })
}


export const contentCopy = (text: string) => navigator.clipboard.writeText(text)

export async function copyLink(text: string, tab: chrome.tabs.Tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: contentCopy,
    args: [text]
  })
}

export const matchFormatterAction = (
    actionId: chrome.contextMenus.OnClickData["menuItemId"]
  ) => {
    const [matched] = FORMATTERS.filter((formatter) => {
      const key = Object.keys(formatter).indexOf(String(actionId))
      if (key != -1) {
        return formatter?.[actionId]
      }
    })

    return matched
  }
