import { useQuery } from '@tanstack/react-query'
import { getAnimals } from '../api.ts'

export const useAnimals = () =>
  useQuery({
    queryKey: ['animals'],
    queryFn: getAnimals,
  })
