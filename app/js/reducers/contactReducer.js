export default function contactReducer(state = [], action) {
  if (!action) return state;
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, {
        id: action.contact.id,
        name: action.contact.name,
        email: action.contact.email,
        tel: action.contact.tel
      }];
    case 'DELETE_CONTACT':
      return state.filter((contact) => {
        return contact.id != action.id;
      });
    case 'UPDATE_CONTACT':
      // Get all ids in state and get update index need to be update
      var ids = state.map((contact)=> {
        return contact.id
      });
      var indexToUpdate = ids.indexOf(action.contact.id);

      return [
        ...state.slice(0, indexToUpdate),
        Object.assign({}, state[indexToUpdate], action.contact),
        ...state.slice(indexToUpdate+1)
      ]
    default:
      return state
  }
  return state;
}
