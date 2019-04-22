const { test } = require('@ianwalter/bff')
const concat = require('..')

test('files get concatenated', async ({ expect }) => {
  const html = await concat(
    'tests/fixtures/book-*.html',
    'tests/fixtures/some-book.html',
    '**/book.html'
  )
  expect(html).toMatchSnapshot()
})
