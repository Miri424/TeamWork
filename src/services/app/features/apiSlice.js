import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../constants/api";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getMovies: builder.query({
      query: () => "/movies",
    }),
    getSeries: builder.query({
      query: () => "/series",
    }),
    deleteMovies: builder.mutation({
      query: (id) => ({
        url: `/movies/${id}`,
        method: "DELETE",
      }),
    }),
    deleteSeries: builder.mutation({
      query: (id) => ({
        url: `/series/${id}`,
        method: "DELETE",
      }),
    }),
    saveUser: builder.mutation({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetMoviesQuery,
  useGetSeriesQuery,
  useDeleteMoviesMutation,
  useDeleteSeriesMutation,
  useSaveUserMutation,
  useDeleteUserMutation,
} = apiSlice;

export default apiSlice;
