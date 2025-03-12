import { View, Text, useWindowDimensions, Image, Pressable } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';

import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

interface Props {
    poster: string;
    originalTitle: string;
    title: string;
}

const MoviesHeader = ({ poster, originalTitle, title }: Props) => {

    const { height: screenHeight } = useWindowDimensions();

    return (
        <>

            {/* gradient */}
            <LinearGradient
                colors={['rgba(0,0,0,0.3)', 'transparent']}
                start={[0, 0]}
                style={{
                    height: screenHeight * 0.4,
                    position: 'absolute',
                    zIndex: 1,
                    width: '100%',
                }}


            />




            <View style={{
                position: 'absolute',
                zIndex: 99,
                top: 40,
                left: 20,
                elevation: 9,

            }} >
                <Pressable onPress={() => router.dismiss()}>

                    <Ionicons
                        name='arrow-back-outline'
                        size={30}
                        color='white'
                        //className='shadow'
                        className='bg-black/20 rounded-full p-1'

                    />

                </Pressable>
            </View>


            <View
                style={{ height: screenHeight * 0.7 }}
                className='shadow-xl shadow-black/20'>

                <View className='flex-1 rounded-b[25px] overflow-hidden'>
                    <Image
                        source={{ uri: poster }}
                        resizeMode='cover'
                        className='flex-1'
                    />
                </View>

                <View className='px-5 mt-5 justify-center items-center'>
                    {/* <Text className='text-xl font-bold'>{originalTitle}</Text> */}
                    <Text className='text-xl font-semibold'>{title}</Text>

                </View>

            </View>
        </>

    )
}

export default MoviesHeader