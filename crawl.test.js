const { test, expect } = require('@jest/globals')
const { normalizeURL } = require('./crawl.js')

test('normalizeURL protocol', () => {
    const input = 'https://aviatecho.com/about'
    const actual = normalizeURL(input)
    const expected = 'aviatecho.com/about'
    expect(actual).toEqual(expected)
})

test('normalizeURL slash', () => {
    const input = 'https://aviatecho.com/about/'
    const actual = normalizeURL(input)
    const expected = 'aviatecho.com/about'
    expect(actual).toEqual(expected)
})

test('normalizeURL capitals', () => {
    const input = 'https://Aviatecho.com/about'
    const actual = normalizeURL(input)
    const expected = 'aviatecho.com/about'
    expect(actual).toEqual(expected)
})