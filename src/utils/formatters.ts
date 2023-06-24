export const lowercase = (text: string) => text.toLowerCase()

export const uppercase = (text: string) => text.toUpperCase()

export const titlecase = (text: string) =>
  text.toLowerCase().replace(/^(.)|\s(.)/g, (char) => char.toUpperCase())

export const sentencecase = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1)

export const doubleQuotions = (text: string) => (`"${text}"`)

export const singleQuotions = (text: string) => (`'${text}'`)

export const parentheses = (text: string) => (`(${text})`)

export const brackets = (text: string) => (`[${text}]`)

export const curlyBrackets = (text: string) => (`{${text}}`)
