import * as React from 'react'
import { Route, Switch } from 'react-router'

import Bundle from './bundle'

const loadHome = cb => require.ensure([], () => cb(require('./home')), 'HomePage')
const loadSearch = cb => require.ensure([], () => cb(require('./search')), 'SearchPage')
const loadAbout = cb => require.ensure([], () => cb(require('./about')), 'AboutPage')

const HomePage = () => <Bundle load={loadHome}/>
const SearchPage = () =>  <Bundle load={loadSearch}/>
const AboutPage = () =>  <Bundle load={loadAbout}/>

export default ({ store }) => (
  <Switch>
    <Route exact={true} path='/' component={HomePage}/>
    <Route path='/spa/login-area' component={AboutPage}/>
    <Route path='/new-search/:categoryName?' component={SearchPage}/>
    <Route path='/:category/s' component={SearchPage}/>
  </Switch>
)
