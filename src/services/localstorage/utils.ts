export const JSONparse = (str: string) => {
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error(error)
    return undefined
  }
}
