import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const Headers = {
}

const createRequest = (url) => ({ url, headers: Headers })

const baseUrl = '/.netlify/functions'  ;

export const Api = createApi({
    reducerPath: 'Api',
    baseQuery: fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({

        getMyUrl: builder.query({
            query: (myUrl) => createRequest(`/Api?search=${myUrl}`),
        }),
     
    })
})

export const { 
    useGetMyUrlQuery, 
} = Api;