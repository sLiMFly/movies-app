import { useMovie } from '@/presentation/hooks/useMovie';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, ActivityIndicator, ScrollView } from 'react-native'

const MovieScreen = () => {

    const { id } = useLocalSearchParams();

    const { movieQuery } = useMovie(+id);

    if (movieQuery.isLoading) {
        return (
            <View className='flex flex-1 justify-center items-center'>
                <Text className='mb-4'>Loading...</Text>
                <ActivityIndicator color="blue" size={50} />
            </View>
        )
    }

    return (
        <ScrollView>

            <View>
                <Text>{movieQuery.data?.title ?? 'Nothing!'}</Text>
            </View>
        </ScrollView>
    )
}

export default MovieScreen