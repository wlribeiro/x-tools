import { FORMATTERS } from "~/menu"
import {
  copyLink,
  generateContextMenu,
  generateContextMenuWithArray,
  matchFormatterAction
} from "~backgrounds/utils"

import { matchMenu } from "./listeners/contextMenus"

export const createFormatterMenu = () => {
  FORMATTERS.forEach((options, id) => {
    console.log(id)

    generateContextMenuWithArray(options)
    generateContextMenu({
      id: `separator-${id}`,
      title: "separator",
      type: "separator"
    })
  })
}

export const backgrounds = () => {
  chrome.contextMenus.onClicked.addListener(matchMenu)
}
