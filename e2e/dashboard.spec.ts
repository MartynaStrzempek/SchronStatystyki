import { expect, test } from '@playwright/test'

test('shows dashboard on home page', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
})
