import { describe, test, expect } from 'vitest'

describe('sample test', () => {
  test('1 + 1 = 2', () => {
    const result = 1 + 1
    const expect_result = 2
    expect(result).toEqual(expect_result)
  })
})
