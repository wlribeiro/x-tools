export const convertToLowerCase = (text) => {
  return text.toLowerCase()
}

export const convertToUpperCase = (text) => {
  return text.toUpperCase()
}

export const convertToTitleCase = (text) => {
  return text.toLowerCase().replace(/^(.)|\s(.)/g, (char) => char.toUpperCase())
}

export const convertToSentenceCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
}
