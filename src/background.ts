import { CONTEXT_MENU_FORMATTER_ITEMS, CONTEXT_MENU_SYMBOL_ITEMS } from "./menu/"

function contentCopy(text) {
  navigator.clipboard.writeText(text)
}

async function copyLink(text, tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: contentCopy,
    args: [text]
  })
}

const generateContextMenuWithArray = (options) => {
  Object.keys(options).map((key) => {
    generateContextMenu({ id: key, title: options[key].title })
  })
}

const generateContextMenu = (options) => {
  chrome.contextMenus.create({
    ...options,
    contexts: ["page", "selection"]
  })
}

;[CONTEXT_MENU_FORMATTER_ITEMS, CONTEXT_MENU_SYMBOL_ITEMS].forEach(
  (options, id) => {
    generateContextMenuWithArray(options)
    generateContextMenu({
      id: `separator-${id}`,
      title: "separator",
      type: "separator"
    })
  }
)

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  if (
    Object.keys(CONTEXT_MENU_FORMATTER_ITEMS).includes(
      info.menuItemId as string
    )
  ) {
    await copyLink(
      CONTEXT_MENU_FORMATTER_ITEMS[info.menuItemId].function(
        info.selectionText
      ),
      tab
    )
  } else if (
    Object.keys(CONTEXT_MENU_SYMBOL_ITEMS).includes(info.menuItemId as string)
  ) {
    await copyLink(
      CONTEXT_MENU_SYMBOL_ITEMS[info.menuItemId].function(info.selectionText),
      tab
    )
  }
})
