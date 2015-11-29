
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import contactsReducer from './reducers/contactsReducer'
import contactByIdReducer from './reducers/contactByIdReducer'
import Routes  from './routes'

let initialState = {
  contacts: [
    {
      id: 1,
      name : 'Terrence S. Hatfield',
      tel: '651-603-1723',
      email: 'TerrenceSHatfield@rhyta.com'
    },
    {
      id: 2,
      name : 'Chris M. Manning',
      tel: '513-307-5859',
      email: 'ChrisMManning@dayrep.com'
    },
    {
      id: 3,
      name : 'Ricky M. Digiacomo',
      tel: '918-774-0199',
      email: 'RickyMDigiacomo@teleworm.us'
    },
    {
      id: 4,
      name : 'Michael K. Bayne',
      tel: '702-989-5145',
      email: 'MichaelKBayne@rhyta.com'
    },
    {
      id: 5,
      name : 'John I. Wilson',
      tel: '318-292-6700',
      email: 'JohnIWilson@dayrep.com'
    },
    {
      id: 6,
      name : 'Rodolfo P. Robinett',
      tel: '803-557-9815',
      email: 'RodolfoPRobinett@jourrapide.com'
    }
  ]
};

for (var i in initialState.contacts) {
  initialState.contacts[i].avatar = ( Math.floor(Math.random() * 15) + 1)  + '.jpg';
}

var storeState = {
  contacts: initialState.contacts.map( (contact) =>{
    return contact.id
  } ) ,
  contactById: initialState.contacts.reduce((map, contact) => {
    map[contact.id] = contact;
    return map;
  }, {})
}

// Redux
let ContactApp = combineReducers({
  contacts: contactsReducer,
  contactById: contactByIdReducer
});
let store = createStore(ContactApp, storeState );

ReactDOM.render(
  <Provider store={store}>
    <Router children={Routes} history={createBrowserHistory()} />
  </Provider>,
  document.getElementById('root')
);


// ContactManager.start(initialState,store);
