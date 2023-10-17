const { JSDOM } = require("jsdom")

function getURLsFromHTML(htmlBody,baseUrl){
    const dom = new JSDOM(htmlBody)
    const urlElements = dom.window.document.querySelectorAll('a')
    const urls = []
    for (urlElement of urlElements) {
        if (urlElement.href.slice(0,1)=== '/'){
            //relative
            urls.push(`${baseUrl}${urlElement.href}`)
        } else {
            // absolute
            urls.push(urlElement.href)
        }
        
    }
    return urls

}


function normalizeURL(urlString){
    const urlObj = new URL(urlString)
    const hostPath = `${urlObj.hostname}${urlObj.pathname}`
    if (hostPath.length > 0 && hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
    }
    return hostPath

}

module.exports= {
    normalizeURL,
    getURLsFromHTML
}