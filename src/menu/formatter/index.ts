import type { Formatter } from "~types"
import * as formatters from "~utils/formatters"

export const CONTEXT_MENU_FORMATTER_ITEMS: Formatter = {
  lowercase: {
    title: "Copiar e converter para minúsculas",
    func: formatters.lowercase
  },
  titlecase: {
    title: "Copiar e converter para titulo",
    func: formatters.titlecase
  },
  uppercase: {
    title: "Copiar e converter para maiúsculas",
    func: formatters.uppercase
  },
  sentencecase: {
    title: "Copiar e converter para sentença",
    func: formatters.sentencecase
  }
}

export const CONTEXT_MENU_SYMBOL_ITEMS: Formatter = {
  doubleQuotes: {
    title: "Copiar e adicionar aspas duplas",
    func: formatters.doubleQuotions
  },
  singleQuotes: {
    title: "Copiar e adicionar aspas simples",
    func: formatters.singleQuotions
  },
  parentheses: {
    title: "Copiar e adicionar parenteses",
    func: formatters.parentheses
  },
  brackets: {
    title: "Copiar e adicionar colchetes",
    func: formatters.brackets
  },
  curlyBrackets: {
    title: "Copiar e adicionar chaves",
    func: formatters.curlyBrackets
  }
}

export const CONTEXT_MENU_REMOVE_ITEMS: Formatter = {
  removePoint: {
    title: "Copiar e remover pontos",
    func: formatters.copyWithoutPoint
  }
}

export const FORMATTERS = [
    CONTEXT_MENU_FORMATTER_ITEMS,
    CONTEXT_MENU_SYMBOL_ITEMS,
    CONTEXT_MENU_REMOVE_ITEMS
]
