import { apiSlice } from "../api/apiSlice";

export const clientsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allClients: builder.query({
      query: () => ({
        url: "/clients/all",
      }),
      providesTags: ["client"],
    }),
    updateClient: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/clients/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["client"],
    }),
    addClient: builder.mutation({
      query: (data) => ({
        url: `/clients/add`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["client"],
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `/clients/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["client"],
    }),
    getClientById: builder.query({
      query: (id) => ({
        url: `/clients/${id}`,
      }),
      providesTags: ["client"],
    }),
  }),
});

export const {
  useAllClientsQuery,
  useUpdateClientMutation,
  useAddClientMutation,
  useDeleteClientMutation,
  useGetClientByIdQuery,
} = clientsApi;
