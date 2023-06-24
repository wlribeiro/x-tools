import * as formatters from "~utils/formatters"

export const CONTEXT_MENU_FORMATTER_ITEMS = {
  lowercase: {
    title: "Copiar e converter para minúsculas",
    function: formatters.lowercase
  },
  titlecase: {
    title: "Copiar e converter para titulo",
    function: formatters.titlecase
  },
  uppercase: {
    title: "Copiar e converter para maiúsculas",
    function: formatters.uppercase
  },
  sentencecase: {
    title: "Copiar e converter para sentença",
    function: formatters.sentencecase
  }
}

export const CONTEXT_MENU_SYMBOL_ITEMS = {
  doubleQuotes: {
    title: "Copiar e adicionar aspas duplas",
    function: formatters.doubleQuotions
  },
  singleQuotes: {
    title: "Copiar e adicionar aspas simples",
    function: formatters.singleQuotions
  },
  parentheses: {
    title: "Copiar e adicionar parenteses",
    function: formatters.parentheses
  },
  brackets: {
    title: "Copiar e adicionar colchetes",
    function: formatters.brackets
  },
  curlyBrackets: {
    title: "Copiar e adicionar chaves",
    function: formatters.curlyBrackets
  }
}
