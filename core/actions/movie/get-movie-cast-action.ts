import { movieApi } from "@/core/api/movie-api";
import { CreditResponse } from "@/infrastructure/interfaces/credit-response";
import { CastMapper } from "@/infrastructure/mappers/cast.mapper";
import { Try } from "expo-router/build/views/Try";

export const getMovieCastAction = async (id: number | string) => {
  try {
    const { data } = await movieApi.get<CreditResponse>(`/${id}/credits`);

    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load cast";
  }
};
