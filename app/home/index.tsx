import { View, Text, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'

import { useMovies } from '@/presentation/hooks/useMovies'
import MainSlideshow from '@/presentation/components/movies/MainSlideshow'
import MoviesHorizontalList from '@/presentation/components/movies/MoviesHorizontalList'

const HomeScreen = () => {

    const SafeArea = useSafeAreaInsets();
    const { nowPlayingQuery, popularQuery, topQuery, upcomingQuery } = useMovies();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className='justify-center items-center flex-1'>
                <ActivityIndicator color='blue' size={50} />
            </View>
        )
    }



    return (

        <ScrollView>

            <View className='mt-2 pb-10' style={{ paddingTop: SafeArea.top }}>
                <Text className='text-3xl font-bold px-4 mb-2'>MoviesApp</Text>

                {/* carousel  */}
                <MainSlideshow movies={nowPlayingQuery.data ?? []} />

                {/* popular */}
                <MoviesHorizontalList
                    title="Populares"
                    movies={popularQuery.data ?? []}
                    className='mb-5'
                />

                {/* top rated */}
                <MoviesHorizontalList
                    title="Mejor calificadas"
                    movies={topQuery.data?.pages.flat() ?? []}
                    className='mb-5'
                    loadNextPage={topQuery.fetchNextPage}
                />

                {/* upcoming */}
                <MoviesHorizontalList
                    title="Próximamente"
                    movies={upcomingQuery.data ?? []}
                    className='mb-5'
                />
            </View>


        </ScrollView>
    )
}

export default HomeScreen