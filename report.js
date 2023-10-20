function printReport(pages){
    console.log('report is starting ...')

}

function sortPages(pages){
    const pagesArray = Object.entries(pages)
    
    pagesArray.sort((a,b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1]-a[1]
    })
    return pagesArray
}

module.exports= {
    sortPages
}