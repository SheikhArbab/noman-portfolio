import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_backend + "project/",
        credentials: 'include',
        mode: 'cors',
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        createProject: builder.mutation({
            query: (projectData) => ({
                url: 'create',
                method: 'POST',
                body: projectData,
            }),
        }),
        getAllProjects: builder.query({
            query: ({ page, limit, search }) => ({
                url: `get-all?page=${page}&limit=${limit}&search=${search}`,
                method: 'GET',
            }),
        }),
        updateProject: builder.mutation({
            query: ({ id, updateData }) => ({
                url: `update/${id}`,
                method: 'PUT',
                body: updateData,
            }),
        }),
        deleteProject: builder.mutation({
            query: (id) => ({
                url: `delete/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useCreateProjectMutation,
    useGetAllProjectsQuery,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectApi;
