import { CONTEXT_MENU_ITEMS } from "~/constants"
import {
  convertToLowerCase,
  convertToSentenceCase,
  convertToTitleCase,
  convertToUpperCase
} from "~/utils/formatters"

CONTEXT_MENU_ITEMS.forEach((item) => {
  chrome.contextMenus.create({
    ...item,
    contexts: ["page", "selection"]
  })
})

chrome.contextMenus.onClicked.addListener(async function (info, tab) {
  let result = ""

  switch (info.menuItemId) {
    case "lowercase":
      result = convertToLowerCase(info.selectionText)
      break

    case "uppercase":
      result = convertToUpperCase(info.selectionText)
      break

    case "titlecase":
      result = convertToTitleCase(info.selectionText)
      break

    case "sentencecase":
      result = convertToSentenceCase(info.selectionText)
      break

    default:
      break
  }

  await copyLink(result, tab)
})

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
