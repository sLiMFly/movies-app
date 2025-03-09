import { View, Text, FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { Movie } from '@/infrastructure/interfaces/movie.interface';
import MoviePoster from './MoviePoster';
import { useEffect, useRef } from 'react';

interface Props {
    title?: string;
    movies: Movie[];
    className?: string;

    loadNextPage?: () => void;
}



const MoviesHorizontalList = ({
    title,
    movies,
    className,
    loadNextPage
}: Props) => {

    const isLoading = useRef(false);


    useEffect(() => {
        setTimeout(() => {
            isLoading.current = false;
        }, 1000);
    }, [movies])


    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (isLoading.current) return;

        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

        const isEndReached = contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

        if (!isEndReached) return;

        isLoading.current = true;

        console.log('charge new data');
        loadNextPage && loadNextPage();  //loadNextPage?.();


    }

    return (
        <View className={`${className}`} >
            {title && <Text className='text-3xl font-bold px-4'>{title}</Text>
            }

            <FlatList
                horizontal
                data={movies}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, i) => `${item.id}-${i}`} // or  item.id.toString()
                renderItem={({ item }) => <MoviePoster id={item.id} poster={item.poster} smallposter />}

                onScroll={onScroll}
            />


        </View >
    )
}

export default MoviesHorizontalList