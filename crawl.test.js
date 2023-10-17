const { test, expect } = require('@jest/globals')
const { normalizeURL, getURLsFromHTML } = require('./crawl.js')

const { JSDOM } = require('jsdom')


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

test('getURLsFromHTML', () => {
    const inputHTMLBody = `
    <html>
        <body>
            <a href="https://aviatecho.com">
                aviatecho
            </a>
        </body>
    </html>
    `
    const inputBaseURL = "https://aviatecho.com/"
    const actual = getURLsFromHTML(inputHTMLBody, inputBaseURL)
    const expected = ["https://aviatecho.com/"]
    expect(actual).toEqual(expected)
})