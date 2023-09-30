import React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigation />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
