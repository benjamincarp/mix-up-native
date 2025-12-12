import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import type { Pokemon } from './types'

const { EXPO_PUBLIC_CONTENTFUL_SPACE_ID, EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN } = process.env

// Define a service using a base URL and expected endpoints
export const drinksApi = createApi({
    reducerPath: 'drinksApi',
    baseQuery: fetchBaseQuery({ baseUrl: `https://cdn.contentful.com//spaces/${EXPO_PUBLIC_CONTENTFUL_SPACE_ID}/environments/master/` }),
    endpoints: (builder) => ({
        getAllDrinks: builder.query<any, string>({
            query: () => `entries?access_token=${EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        }),
    })
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDrinksQuery } = drinksApi