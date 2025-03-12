import { View, Text } from 'react-native'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import "../global.css"
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const queryClient = new QueryClient()

const RootLayout = () => {

  return (
    <GestureHandlerRootView>

      <QueryClientProvider client={queryClient}>

        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: 'white'
            }
          }}
        />

      </QueryClientProvider>
    </GestureHandlerRootView>

  )
}

export default RootLayout