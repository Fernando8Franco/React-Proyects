import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchUsers } from '../services/users'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useUsers = () => {
  const { isLoading, isError, data, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    refetchOnWindowFocus: false
  })

  return {
    isLoading,
    isError,
    users: data?.pages.flatMap(page => page.users) ?? [],
    fetchNextPage,
    hasNextPage,
    refetch
  }
}
