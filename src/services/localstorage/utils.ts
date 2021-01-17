export const JSONparse = <T>(str: string): T | undefined => {
  try {
    return JSON.parse(str)
  } catch (error) {
    console.error(error)
    return undefined
  }
}
