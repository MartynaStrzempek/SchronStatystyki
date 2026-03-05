import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import type { useAnimals } from '@/features/animals/hooks/useAnimals'

type RefetchCardProps = {
  refetch: ReturnType<typeof useAnimals>['refetch']
  isFetching: boolean
  error: Error
}

export function RefetchCard({ refetch, isFetching, error }: RefetchCardProps) {
  const title = 'Could not load data'
  const message = error instanceof Error ? error.message : 'Unknown error'
  const retryingLabel = 'Retrying...'
  const tryAgainLabel = 'Try again'

  return (
    <Card>
      <CardHeader>
        <p className="font-semibold text-2xl">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{message}</p>
        <Button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? retryingLabel : tryAgainLabel}
        </Button>
      </CardContent>
    </Card>
  )
}
