import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'


export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://5ebbb8e5f2cfeb001697d05c.mockapi.io/'}),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (name) => `users`,
        }),
    }),
});

export const {useGetUsersQuery} = usersApi;