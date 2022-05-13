import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://627ecb53b75a25d3f3bd2f15.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => ({
        url: `/contacts`,
        method: 'GET',
      }),
      providesTags: ['contacts'],
    }),

    createContacts: builder.mutation({
      query: ({ name, number }) => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name,
          phone: number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),

    deleteContacts: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useCreateContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
