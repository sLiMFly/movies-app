import { getMovieByAction } from '@/core/actions/movie/get-movie-by-id.action'
import { useQuery } from '@tanstack/react-query'

export const useMovie = (id: number) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieByAction(id),
        staleTime: 1000 * 60 * 60 * 24
    })


    return {
        movieQuery,
    }
}
