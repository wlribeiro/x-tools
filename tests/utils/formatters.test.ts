import {
  convertToLowerCase,
  convertToSentenceCase,
  convertToTitleCase,
  convertToUpperCase
} from "~/utils/formatters"

// Replace 'your-file-name' with the actual file name

describe("Text Conversion Functions", () => {
  describe("convertToLowerCase", () => {
    test("converts text to lowercase", () => {
      const input = "Hello World"
      const expectedOutput = "hello world"
      const result = convertToLowerCase(input)
      expect(result).toEqual(expectedOutput)
    })
  })

  describe("convertToUpperCase", () => {
    test("converts text to uppercase", () => {
      const input = "Hello World"
      const expectedOutput = "HELLO WORLD"
      const result = convertToUpperCase(input)
      expect(result).toEqual(expectedOutput)
    })
  })

  describe("convertToTitleCase", () => {
    test("converts text to title case", () => {
      const input = "hello world"
      const expectedOutput = "Hello World"
      const result = convertToTitleCase(input)
      expect(result).toEqual(expectedOutput)
    })

    test("converts text with special characters to title case", () => {
      const input = "the quick brown fox jumps over the lazy dog"
      const expectedOutput = "The Quick Brown Fox Jumps Over The Lazy Dog"
      const result = convertToTitleCase(input)
      expect(result).toEqual(expectedOutput)
    })
  })

  describe("convertToSentenceCase", () => {
    test("converts text to sentence case", () => {
      const input = "hello world"
      const expectedOutput = "Hello world"
      const result = convertToSentenceCase(input)
      expect(result).toEqual(expectedOutput)
    })

    test("retains sentence case for already capitalized text", () => {
      const input = "OpenAI is an artificial intelligence company"
      const expectedOutput = "Openai is an artificial intelligence company"
      const result = convertToSentenceCase(input)
      expect(result).toEqual(expectedOutput)
    })
  })
})
