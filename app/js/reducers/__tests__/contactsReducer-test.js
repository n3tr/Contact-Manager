
import contactsReducer from '../contactsReducer'
import expect from 'expect'
import deepFreeze from 'deep-freeze'

describe('contactsReducer', () => {
  it('should have initialize state as emptry array', () => {
    expect(contactsReducer()).toBeA('array');
    expect(contactsReducer().length).toEqual(0);
  })

  it('should return correct state when add', () => {
    let beforeState = [];
    let afterState = [ 1 ];

    deepFreeze(beforeState);

    expect(
      contactsReducer(beforeState, {
        type: 'ADD_CONTACT',
        contact: {
          id: 1,
          name: 'Net',
          email: 'ex@gmail.com',
          tel: '12345'
        }
      })
    ).toEqual(afterState);
  });

  it('should return correct state when delete', () => {

    // let beforeState = [
    //   { id: 1, name: 'Net', email: 'ex@gmail.com', tel: '12345'},
    //   { id: 2, name: 'Net2', email: 'ex2@gmail.com', tel: '12345'}
    // ];
    let beforeState =[ 1, 2 ];
    let afterState = [ 2 ];
    deepFreeze(beforeState);

    expect(
      contactsReducer(beforeState, {
        type: 'DELETE_CONTACT',
        id: 1
      })
    ).toEqual(afterState);

  });

  it('should return correct when update', () => {
    let beforeState = [ 1 , 2 ];

    let afterState = [1, 2];

    deepFreeze(beforeState);

    expect(
      contactsReducer(beforeState, {
        type: 'UPDATE_CONTACT',
        contact: {
          id: 2,
          name: 'Net2-edited',
          email: 'ex2@gmail.com',
          tel: '12345-edited'
        }
      })
    ).toEqual(afterState);

  });
});
