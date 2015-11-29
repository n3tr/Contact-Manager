export default function contactByIdReducer(state = {}, action) {
  if(!action) return state;

  switch (action.type) {
    case 'ADD_CONTACT':
      let newId = action.contact.id;
      var entity = {};
      entity[newId] = action.contact;
      return Object.assign({}, state, entity);
      break;
    case 'DELETE_CONTACT':
      // Filter id not equal delete id and map
      return Object.keys(state).filter( (id) => {
        // Object key return strings need to parse int
        return parseInt(id) !== parseInt(action.id);
      }).reduce( (map, id) => {
        map[id] = state[id]
        return map;
      }, {});
    case 'UPDATE_CONTACT':
      var entity = {};
      // Create new map id: { concatation between old and new one }
      entity[action.contact.id] = Object.assign({}, state[action.contact.id], action.contact);
      return Object.assign({}, state, entity);
    default:

  }

  return state;
}
