interface Data<Value> {
  [key: string]: Value
}

export const removeProps = <DataValue>(
  redunantProps: string[],
  data: Data<DataValue>
): Data<DataValue> =>
  redunantProps.reduce(
    (acc, field) => (({ [field]: removedProp, ...obj }) => obj)(acc),
    data
  )
