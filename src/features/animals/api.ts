// import { fetchJson } from '@/shared/utils/http';
import { type Animal } from './types'

export const getAnimals = async (): Promise<Animal[]> => {
  // return fetchJson('/api/animals', AnimalsSchema);
  return (await import('@/data/animals.json')).default as Animal[]
}
