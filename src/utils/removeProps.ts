export const removeProps = (redunantProps: string[], data: { [key: string]: any }): object => redunantProps.reduce(
  (acc, field) => (({ [field]: removedProp, ...obj }) => obj)(acc),
  data
)
