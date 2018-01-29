import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'

const isProd = process.env.NODE_ENV == 'production'
const DevTools = !isProd && (require('mobx-react-devtools') as any).default

import Store from 'store'
import Routes from 'routes'

declare global {
  interface Window { store: Store }
  interface NodeRequire {
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, name?: string) => void
  }
}

const store = new Store()

if (!isProd)
  window.store = store

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <Routes store={store}/>
      </BrowserRouter>
      { !isProd && <DevTools/> }
    </div>
  </Provider>,
  document.getElementById('root')
)