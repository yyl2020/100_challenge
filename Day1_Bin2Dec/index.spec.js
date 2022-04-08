import { expect, describe, it } from 'vitest'
import { bin2Dec } from './index.js'

describe('test', () => {

  it('bin', () => {
    expect(bin2Dec('100')).toMatchInlineSnapshot('4')
  })
  it('Not bin', () => {
    expect(bin2Dec('a01119')).toMatchInlineSnapshot('"not bin"')
  })
})