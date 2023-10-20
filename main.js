const { argv } = require("process")
const { crawlPage } = require('./crawl.js')

async function main(){
    if (process.argv.length < 3) {
        console.log('no website provided !')
        process.exit(1)
    }
    if (process.argv.length > 3){
        console.log('wrong number of args !')
        process.exit(1)
    }
    console.log(`Crawler is starting at : ${process.argv[2]}`)

    const baseUrl = process.argv[2]
    
    const pages = await crawlPage(baseUrl, baseUrl, {})
    for (const page of Object.entries(pages)){
        console.log(page)
    }
}

main()
