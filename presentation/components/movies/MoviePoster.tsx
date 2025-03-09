import { View, Text, Pressable, Image } from 'react-native'

import { Movie } from '@/infrastructure/interfaces/movie.interface'

interface Props {
    id: number;
    poster: string;
    smallposter?: boolean;
    className?: string;
}


const MoviePoster = ({ id, poster, smallposter = false, className }: Props) => {
    return (
        <Pressable
            className={`active:opacity-90 px-2 ${className}`}
        >

            <Image
                source={{ uri: poster }}
                className='shadow-lg rounded-2xl w-full h-full'
                style={{
                    width: smallposter ? 85 : 150,
                    height: smallposter ? 130 : 250,
                }}
                resizeMode='cover'
            />


        </Pressable>



    )
}

export default MoviePoster