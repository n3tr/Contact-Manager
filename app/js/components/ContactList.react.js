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
        <ul className="contact-list">
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
