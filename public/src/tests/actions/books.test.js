import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddBooks, addBook, editBook, removeBook } from '../../actions/books';

// import "firebase/storage";
import books from '../fixtures/books';
// import database, { storage }  from '../../firebase/firebase';
const createMockStore = configureMockStore([thunk]);


test('should x', ()=>{
  const a = ()=> 5;
  expect(a()).toEqual(5);
})


// test('should setup edit expense action object', () => {
//   const action = editExpense('123abc', { note: 'New note value' });
//   expect(action).toEqual({
//     type: 'EDIT_EXPENSE',
//     id: '123abc',
//     updates: {
//       note: 'New note value'
//     }
//   });
// });
