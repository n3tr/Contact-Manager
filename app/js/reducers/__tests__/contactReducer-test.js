
import contactReducer from '../contactReducer'
import expect from 'expect'
import deepFreeze from 'deep-freeze'

describe('contactReducer', () => {
  it('should have initialize state as emptry array', () => {
    expect(contactReducer()).toBeA('array');
    expect(contactReducer().length).toEqual(0);
  })

  it('should return correct state when add', () => {
    let beforeState = [];
    let afterState = [{ id: 1, name: 'Net', email: 'ex@gmail.com', tel: '12345'}];

    deepFreeze(beforeState);

    expect(
      contactReducer(beforeState, {
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

    let beforeState = [
      { id: 1, name: 'Net', email: 'ex@gmail.com', tel: '12345'},
      { id: 2, name: 'Net2', email: 'ex2@gmail.com', tel: '12345'}
    ];
    let afterState = [{ id: 2, name: 'Net2', email: 'ex2@gmail.com', tel: '12345'}];
    deepFreeze(beforeState);

    expect(
      contactReducer(beforeState, {
        type: 'DELETE_CONTACT',
        id: 1
      })
    ).toEqual(afterState);

  });

  it('should return correct when update', () => {
    let beforeState = [
      { id: 1, name: 'Net', email: 'ex@gmail.com', tel: '12345'},
      { id: 2, name: 'Net2', email: 'ex2@gmail.com', tel: '12345'}
    ];

    let afterState = [
      { id: 1, name: 'Net', email: 'ex@gmail.com', tel: '12345'},
      { id: 2, name: 'Net2-edited', email: 'ex2@gmail.com', tel: '12345-edited'}
    ];

    deepFreeze(beforeState);

    expect(
      contactReducer(beforeState, {
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
