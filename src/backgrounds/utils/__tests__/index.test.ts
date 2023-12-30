import { lowercase } from '../../../utils/formatters';
import { CONTEXT_MENU_FORMATTER_ITEMS } from "~menu"
import { contentCopy, matchFormatterAction } from ".."

describe("contentCopy", () => {
  it("copies text to clipboard", async () => {
    const text = "Hello, World!"
    const writeTextMock = jest.fn()

    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock
      }
    })

    contentCopy(text)
    expect(writeTextMock).toHaveBeenCalledWith(text)
  })

  describe("matchFormatterAction", () => {
    const result = matchFormatterAction('lowercase')
    expect(result).toEqual(
        CONTEXT_MENU_FORMATTER_ITEMS.lowercase
    )
  })
})
