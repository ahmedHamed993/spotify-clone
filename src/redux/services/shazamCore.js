import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key','814e09949cmshf2ae1ffeb1cafe6p171f01jsn62f120a2e47e');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts      : builder.query({query:()=> '/charts/world'}),
        getSongDetais     : builder.query({query:({songid})=> `/tracks/details?track_id=${songid}`}),
        getSongsByGenre    : builder.query({query:(genre)=> `/charts/genre-world?genre_code=${genre}`}),
        getSongRelated    : builder.query({query:({songid})=>`/tracks/related?track_id=${songid}`}),
        getArtistDetails  : builder.query({query:(artistid)=>`/artists/details?artist_id=${artistid}`}),
        getSongsByCountry : builder.query({query: (countryCode)=> `/charts/country?country_code=${countryCode}`}),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    })
});
export const  {
    useGetTopChartsQuery,
    useGetSongDetaisQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery,
    useGetSongsBySearchQuery,
} = shazamCoreApi;