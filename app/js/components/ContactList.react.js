import React  from 'react'
import Contact from './Contact.react'

export default class ContactList extends React.Component {

  constructor(props) {
    super(props);
    let { store } = this.props;
    this.state = store.getState();
  }
  componentDidMount() {
    let { store } = this.props;

    this.unsubscribe = store.subscribe( () =>{
      this.setState(store.getState())
    })
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  onClickDelete(contact, e) {
    e.preventDefault();
    let { store } = this.props;
    store.dispatch({
      type: 'DELETE_CONTACT',
      id: contact.id
    });
  }
  render() {
    let self = this;
    let { contacts, contactById } = this.state;
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <a href="#contacts/new" className="btn btn-lg btn-outline">Add Contact</a>
        </p>
        <ul className="media-list row contacts-container">
          {
            contacts.map( (id, i) => {
              return <Contact contact={contactById[id]} onClickDelete={
                self.onClickDelete.bind(this)
              } key={i}/>
            })
          }
        </ul>
      </div>
    )
  }
}
