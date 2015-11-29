import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/App.react'
import NewContact from './components/NewContact.react'
import ContactList from './components/ContactList.react'
import ContactDetail from './components/ContactDetail.react'

const Routes = (
   <Route path="/" component={App}>
     <Route path='contact/:id' component={ContactDetail} />
     <Route path="new" component={NewContact} />
     <Route path="contact/:id/edit" component={NewContact} />
   </Route>
)

export default Routes
