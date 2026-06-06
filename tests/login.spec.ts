import { test, expect } from '@playwright/test'

test('user can log in and lands on the dashboard', async ({ page }) => {
  await page.goto('/login')
  await page.fill('#email', 'demo@example.com')
  await page.fill('#password', 'hunter2')
  // depends on the app's login button test id:
  await page.click('[data-testid=login-btn]')
  // depends on the app's post-login redirect route:
  await expect(page).toHaveURL('/dashboard')
})
