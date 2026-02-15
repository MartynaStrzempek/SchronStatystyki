import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Zapisz</Button>)

    expect(screen.getByRole('button', { name: 'Zapisz' })).toBeInTheDocument()
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Filtruj</Button>)

    expect(screen.getByRole('button', { name: 'Filtruj' })).toHaveClass('bg-secondary')
  })
})
