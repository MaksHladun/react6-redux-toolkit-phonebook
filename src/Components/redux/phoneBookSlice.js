import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneApi = createApi({
    reducerPath: 'phoneApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://620f7bdfec8b2ee283417ed7.mockapi.io/api/v1/',
    }),
    tagTypes: ['Contacts'],
    endpoints: builder => ({
        fetchPhoneBook: builder.query({
            query: () => 'contacts',
            providesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
        createContact: builder.mutation({
            query: newContact => ({
                url: 'contacts',
                method: 'POST',
                body: {
                    name: newContact.name,
                    phone: newContact.number,
                },
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});
export const {
    useFetchPhoneBookQuery,
    useDeleteContactMutation,
    useCreateContactMutation,
} = phoneApi;

// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://620f7bdfec8b2ee283417ed7.mockapi.io/api/v1/';

// export const fetchPhoneBook = createAsyncThunk(
//     'contacts/fetchPhoneBook',
//     async (_, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.get(`/contacts`);
//             const contacts = data;
//             return contacts;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     },
// );

// export const createContact = createAsyncThunk(
//     'contacts/createContact',
//     async (contact, { rejectWithValue }) => {
//         try {
//             const { data } = await axios.post('/contacts', contact);
//             const result = data;
//             return result;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     },
// );

// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, { rejectWithValue }) => {
//         try {
//             await axios.delete(`/contacts/${contactId}`);
//             return contactId;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     },
// );
