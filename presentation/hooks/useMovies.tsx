import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action"
import { popularMoviesAction } from "@/core/actions/movies/pupular.action"
import { topMoviesAction } from "@/core/actions/movies/top.action"
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.action"

export const useMovies = () => {

    //querys
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'now-playing'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    //querys
    const popularQuery = useQuery({
        queryKey: ['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })

    //top rated
    const topQuery = useInfiniteQuery({
        initialPageParam: 1,
        queryKey: ['movies', 'top_rated'],
        queryFn: ({ pageParam }) => {
            console.log(pageParam);
            return topMoviesAction({ page: pageParam })
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        getNextPageParam: (lastPage, pages) => pages.length + 1,

    })

    //upconming
    const upcomingQuery = useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: upcomingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    })


    return {
        nowPlayingQuery,
        popularQuery,
        topQuery,
        upcomingQuery,
    }

}