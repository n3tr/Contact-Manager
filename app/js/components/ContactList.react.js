import React  from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Contact from './Contact.react'

class ContactList extends React.Component {

  onClickDelete(contact, e) {
    e.preventDefault();
    let { dispatch } = this.props;
    dispatch({
      type: 'DELETE_CONTACT',
      id: contact.id
    });
  }
  render() {
    let self = this;
    let { contacts, contactById } = this.props;
    return (
      <div>
        <h2 className="page-header text-center">List of contacts</h2>
        <p className="text-center">
          <Link to="/new" className="btn btn-lg btn-outline">Add Contact</Link>
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

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(ContactList)
