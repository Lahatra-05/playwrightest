import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rebound-tech-main-unit-tests-16557911.dev.odoo.com/web/login');
  await page.getByPlaceholder('Email').fill('admin');
  await page.getByPlaceholder('Password').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('option', { name: 'Contacts' }).click();
  await page.getByRole('button', { name: 'New' }).click();
  await page.getByPlaceholder('e.g. Lumber Inc').fill('LAHATRA');
  await page.getByPlaceholder('Street...').fill('LOT VL 26NAA AMBOHIBARY ANDRONDRA AMPAMANTANANA');
  await page.getByLabel('Email').fill('fenolazalht@gmail.com');
  await page.getByLabel('Save manually').click();
  await page.getByRole('button', { name: 'Send message' }).click();
  await page.getByPlaceholder('Send a message to followers…').fill('hello everyone ');
  await page.getByLabel('Send', { exact: true }).click();
});