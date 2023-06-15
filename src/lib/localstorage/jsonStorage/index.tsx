export class JsonStorage<TValue> {

  constructor(public keyName:string) {}

  save(params: TValue) {
    localStorage.setItem(this.keyName, JSON.stringify(params))
  }

  get() {
    const value = localStorage.getItem(this.keyName)
    if (value)
      return JSON.parse(value) as TValue
  }

  clear() {
    localStorage.removeItem(this.keyName)
  }

  exists() {
    return !!this.get()
  }
}