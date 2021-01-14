interface Data<value> {
  [key: string]: value
}

export const removeProps = <DataValue>(redunantProps: string[], data: Data<DataValue>): Data<DataValue>=> redunantProps.reduce(
  (acc, field) => (({ [field]: removedProp, ...obj }) => obj)(acc),
  data
)
