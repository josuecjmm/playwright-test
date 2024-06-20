import { test, expect } from '@playwright/test';

test('GET books list', async ({ request }) => {
  const bookList = await request.get(`/BookStore/v1/Books`);
  expect(bookList.ok()).toBeTruthy();
  expect(await bookList.text()).toContain('books')
});
