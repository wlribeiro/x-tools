import * as formatters from "~/utils/formatters"

describe("Text Conversion Functions", () => {
  describe("lowercase", () => {
    it("should converts text to lowercase", () => {
      expect(formatters.lowercase("Hello World")).toEqual("hello world")
    })
  })

  describe("uppercase", () => {
    it("should converts text to uppercase", () => {
      expect(formatters.uppercase("Hello World")).toEqual("HELLO WORLD")
    })
  })

  describe("titlecase", () => {
    it("converts text to title case", () => {
      expect(formatters.titlecase("Hello World")).toEqual("Hello World")
    })

    it("should converts text with special characters to title case", () => {
      const input = "the quick brown fox jumps over the lazy dog!"
      const expectedOutput = "The Quick Brown Fox Jumps Over The Lazy Dog!"
      const result = formatters.titlecase(input)
      expect(result).toEqual(expectedOutput)
    })
  })

  describe("sentencecase", () => {
    it("should converts text to sentence case", () => {
      const input = "hello world"
      expect(formatters.sentencecase(input)).toEqual("Hello world")
    })

    it("should retains sentence case for already capitalized text", () => {
      const input = "OpenAI is an artificial intelligence company"
      const expectedOutput = "OpenAI is an artificial intelligence company"
      const result = formatters.sentencecase(input)
      expect(result).toEqual(expectedOutput)
    })
  })

  describe('doubleQuotions', () => {
    it('wraps text with double quotes', () => {
      expect(formatters.doubleQuotions('Hello World')).toBe('"Hello World"');
    });
  });

  describe('singleQuotions', () => {
    it('wraps text with single quotes', () => {
      expect(formatters.singleQuotions('Hello World')).toBe("'Hello World'");
    });
  });

  describe('parentheses', () => {
    it('wraps text with parentheses', () => {
      expect(formatters.parentheses('Hello World')).toBe('(Hello World)');
    });
  });

  describe('brackets', () => {
    it('wraps text with brackets', () => {
      expect(formatters.brackets('Hello World')).toBe('[Hello World]');
    });
  });

  describe('curlyBrackets', () => {
    it('wraps text with curly brackets', () => {
      expect(formatters.curlyBrackets('Hello World')).toBe('{Hello World}');
    });
  });
})
