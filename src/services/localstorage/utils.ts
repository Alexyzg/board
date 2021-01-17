export const JSONparse = (str: string): string | undefined => {
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error(error)
    return undefined
  }
}
