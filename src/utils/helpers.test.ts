import { contentCopy } from "./helpers"

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
})
