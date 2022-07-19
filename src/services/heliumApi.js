import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const heliumHeaders = {
}

const createRequest = (url) => ({ url, headers: heliumHeaders })

const baseUrl = '/.netlify/functions'  ;

export const heliumApi = createApi({
    reducerPath: 'heliumApi',
    baseQuery: fetchBaseQuery({baseUrl}),

    endpoints: (builder) => ({

        // account data
        getHeliumHotspots: builder.query({
            query: (myAddress) => createRequest(`/hotspots?search=/v1/accounts/${myAddress}/hotspots`),
        }),
     
    })
})

export const { 
    useGetHeliumHotspotsQuery, 
    

} = heliumApi;