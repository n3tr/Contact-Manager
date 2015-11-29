export default function contactsReducer(state = [], action) {
  if (!action) return state;
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.contact.id ];
    case 'DELETE_CONTACT':
      return state.filter((id) => {
        return id != action.id;
      });
    case 'UPDATE_CONTACT':
      // Get all ids in state and get update index need to be update
      // var ids = state.map((contact)=> {
      //   return contact.id
      // });
      // var indexToUpdate = ids.indexOf(action.contact.id);
      //
      // return [
      //   ...state.slice(0, indexToUpdate),
      //   Object.assign({}, state[indexToUpdate], action.contact),
      //   ...state.slice(indexToUpdate+1)
      // ]
      return state;
    default:
      return state;
  }
  return state;
}
