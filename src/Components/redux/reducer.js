import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './action';

export const filter = createReducer('', {
    [changeFilter]: (_, action) => action.payload,
});

// import {
//     createContact,
//     deleteContact,
//     fetchPhoneBook,
// } from './contacts-operations';

// const contacts = createReducer([], {
//     [fetchPhoneBook.fulfilled]: (_, action) => action.payload,
//     [createContact.fulfilled]: (state, { payload }) => [payload, ...state],
//     [deleteContact.fulfilled]: (state, { payload }) =>
//         state.filter(({ id }) => id !== payload),
// });

// const filter = createReducer('', {
//     [changeFilter]: (_, { payload }) => payload,
// });

// export default combineReducers({ contacts, filter });
