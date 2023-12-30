import { copyLink, matchFormatterAction } from "~backgrounds/utils"

export const matchMenu = async (
  info: chrome.contextMenus.OnClickData,
  tab?: chrome.tabs.Tab
) => {
  const { menuItemId, selectionText } = info

  const action = matchFormatterAction(menuItemId)
  return await copyLink(action?.[menuItemId].func(selectionText), tab)
}
