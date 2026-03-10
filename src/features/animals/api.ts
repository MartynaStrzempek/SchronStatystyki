// import { fetchJson } from '@/shared/utils/http';
import { delay } from '@/shared/utils/utils'
import { type Animal } from './types'

export const getAnimals = async (): Promise<Animal[]> => {
  // return fetchJson('/api/animals', AnimalsSchema);
  await delay(3000)
  return (await import('@/data/animals.json')).default as Animal[]
}
