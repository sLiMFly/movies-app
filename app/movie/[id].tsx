import MovieCast from '@/presentation/components/movie/MovieCast';
import MovieDescription from '@/presentation/components/movie/MovieDescription';
import MoviesHeader from '@/presentation/components/movie/MoviesHeader';
import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    const { movieQuery, castQuery } = useMovie(+id);

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>Loading...</Text>
                <ActivityIndicator color="blue" size={50} />
            </View>
        )
    }

    return (
        <ScrollView>

            <MoviesHeader
                originalTitle={movieQuery.data.originalTitle}
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
            />

            <MovieDescription movie={movieQuery.data}
            />

            {/* <MovieCast /> */}
            <MovieCast cast={castQuery.data ?? []} />


        </ScrollView>
    )
}

export default MovieScreen;