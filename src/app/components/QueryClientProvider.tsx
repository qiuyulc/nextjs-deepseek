"use client";

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  // Create a client
  const queryClient = new QueryClient()
  
  // 定义一个名为App的函数
  function QueryClientProviderApp({children}:{children:React.ReactNode}) {
    // 返回一个QueryClientProvider组件，并将queryClient作为props传递给该组件
    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }

  export default QueryClientProviderApp