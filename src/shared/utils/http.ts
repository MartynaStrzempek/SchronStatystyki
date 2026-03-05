import { z, type ZodTypeAny } from 'zod'

export async function fetchJson<TSchema extends ZodTypeAny>(
  url: RequestInfo,
  schema: TSchema,
  init?: RequestInit
): Promise<z.infer<TSchema>> {
  const res = await fetch(url, init)

  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} ${res.status}`)
  }

  const json = await res.json()

  const parsed = schema.safeParse(json)
  if (!parsed.success) {
    throw new Error(`API returned invalid data, url ${url}`)
  }
  return parsed.data
}
