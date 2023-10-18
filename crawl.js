const { error } = require("console")
const { STATUS_CODES } = require("http")
const { JSDOM } = require("jsdom")


async function crawlPage(currentUrl){
    console.log(`actively crawling the url : ${currentUrl}`)

    try {
        const resp = await fetch(currentUrl)

        if (resp.status > 399 ) {
            console.log(`error in fetch with status code: ${resp.status} on page: ${currentUrl}`)
            return
        }
        const contentType = resp.headers.get("content-type")
        if ( contentType !== "text/html") {
            console.log(`the page: ${currentUrl} is not html, content type: ${contentType}`)
            return
        }
        console.log(await resp.text()) 
    } catch (error) {
        console.log(`can't fetch: ${error.message} , on page: ${currentUrl}`)
    }
    
}


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
    getURLsFromHTML,
    crawlPage
}