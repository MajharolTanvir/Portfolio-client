import { IMeta, ISkills } from "@/types";
import { TagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const SKILLS_URL = "/skills";

export const divisionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSkills: build.mutation({
      query: (Data) => ({
        url: `${SKILLS_URL}`,
        method: "POST",
        data: Data,
      }),
      invalidatesTags: [TagTypes.skills],
    }),

    getAllSkills: build.query({
      query: (arg: Record<string, any>) => ({
        url: `${SKILLS_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: ISkills[], meta: IMeta[]) => {
        return {
          skills: response,
          meta,
        };
      },
      providesTags: [TagTypes.skills],
    }),

    getSingleSkills: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${SKILLS_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [TagTypes.skills],
    }),

    updateSkills: build.mutation({
      query: (Data) => ({
        url: `${SKILLS_URL}/${Data.id}`,
        method: "PATCH",
        data: Data.values,
      }),
      invalidatesTags: [TagTypes.skills],
    }),

    deleteSkills: build.mutation({
      query: (id: string | string[] | undefined) => ({
        url: `${SKILLS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.skills],
    }),
  }),
});

export const {
  useCreateSkillsMutation,
  useGetAllSkillsQuery,
  useGetSingleSkillsQuery,
  useUpdateSkillsMutation,
  useDeleteSkillsMutation,
} = divisionApi;
