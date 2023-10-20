const { sortPages } = require('./report.js')

test('sortPages', () => {
    const input = {
        'https://aviatecho.com/path':4,
        'https://aviatecho.com/':7,
    }
    const actual = sortPages(input)
    const expected = [
        ['https://aviatecho.com/', 7],
        ['https://aviatecho.com/path', 4],
    ]
    expect(actual).toEqual(expected)
})