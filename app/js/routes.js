import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './components/App.react'
import ContactForm from './components/ContactForm.react'
import ContactList from './components/ContactList.react'
import ContactDetail from './components/ContactDetail.react'

const Routes = (
   <Route path="/" component={App}>
     <Route path='contact/:id' component={ContactDetail} />
     <Route path="new" component={ContactForm} />
     <Route path="contact/:id/edit" component={ContactForm} />
     <Redirect from="*" to="/" />
   </Route>
)

export default Routes
