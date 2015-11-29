import expect from 'expect'
import deepFreeze from 'deep-freeze'
import contactByIdReducer from '../contactByIdReducer'

describe('contactByIdReducer', () => {
  it('should return correct when add contact', ()=> {
    let beforeState = {};
    let afterState = {
      1: {
        id: 1,
        name: 'Net',
        email: 'net@gmail.com',
        tel: '12345',
        avatar: '1.jpg'
      }
    }

    deepFreeze(beforeState);
    expect(
      contactByIdReducer(beforeState, {
        type: 'ADD_CONTACT',
        contact: {
          id: 1,
          name: 'Net',
          email: 'net@gmail.com',
          tel: '12345',
          avatar: '1.jpg'
        }
      })
    ).toEqual(afterState)

  });

  it('should return correct when delete contact', () => {
    let beforeState = {
      1: {
        id: 1,
        name: 'Net',
        email: 'net@gmail.com',
        tel: '12345',
        avatar: '1.jpg'
      },
      2: {
        id: 2,
        name: 'Net2',
        email: 'net2@gmail.com',
        tel: '123456',
        avatar: '12.jpg'
      }
    }
    let afterState = {
      1: {
        id: 1,
        name: 'Net',
        email: 'net@gmail.com',
        tel: '12345',
        avatar: '1.jpg'
      }
    }

    deepFreeze(beforeState)

    expect(
      contactByIdReducer(beforeState, {
        type: 'DELETE_CONTACT',
        id: 2
      })
    ).toEqual(afterState)
  });


  it('shoudl return correct when update', () => {
    let beforeState = {
      1: {
        id: 1,
        name: 'Net',
        email: 'net@gmail.com',
        tel: '12345',
        avatar: '1.jpg'
      },
      2: {
        id: 2,
        name: 'Net2',
        email: 'net2@gmail.com',
        tel: '123456',
        avatar: '12.jpg'
      }
    }

    let afterState = {
      1: {
        id: 1,
        name: 'Net',
        email: 'net@gmail.com',
        tel: '12345',
        avatar: '1.jpg'
      },
      2: {
        id: 2,
        name: 'Net2-edited',
        email: 'net2@gmail.com-edited',
        tel: '123456-edited',
        avatar: '12.jpg'
      }
    }

    deepFreeze(beforeState);

    expect(
      contactByIdReducer(beforeState, {
        type: 'UPDATE_CONTACT',
        contact : {
          id: 2,
          name: 'Net2-edited',
          email: 'net2@gmail.com-edited',
          tel: '123456-edited',
          avatar: '12.jpg'
        }
      })
    ).toEqual(afterState);
  });

});
