class Store {
  api: string
}

declare global{
  interface IRootStore extends Store{}
}

export default Store