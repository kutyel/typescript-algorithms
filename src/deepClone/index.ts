const cloneDeep = (obj: any): any =>
  Object.entries(obj).reduce(
    (o: any, [key, value]) => ((o[key] = { ...cloneDeep(value) }), o),
    {}
  )

export default cloneDeep
