import { View, Text } from 'react-native'
import React from 'react'
import { CompleteMovie } from '@/infrastructure/interfaces/movie.interface'
import { Formatter } from '@/config/helpers/formatter'

interface Props {
    movie: CompleteMovie
}

const MovieDescription = ({ movie }: Props) => {
    return (
        <View className='mx-10 justify-center items-center'>
            <Text className='flex flex-row'>
                <Text>{movie.rating}</Text>
                <Text> - {movie.genres.join(', ')}</Text>
            </Text>

            <Text className='font-bold text-xl mt-5'>Sinopsis</Text>
            <Text className='font-bold mt-2'>{movie.description}</Text>

            <Text className='font-bold mt-2 text-2xl'>{Formatter.formatCurrency(movie.budget)}</Text>

        </View>
    )
}

export default MovieDescription