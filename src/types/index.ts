export type Formatter = {
  [key: string]: {
    title: string
    func: (value: string) => string
  }
}
