import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App.react'
import NewContact from './components/NewContact.react'
import ContactList from './components/ContactList.react'

const Routes = (
   <Route path="/" component={App}>
     <IndexRoute component={ContactList}/>
     <Route path="new" component={NewContact} />
     <Route path=":id/edit" component={NewContact} />
   </Route>
)

export default Routes
