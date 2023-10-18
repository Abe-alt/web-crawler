const { argv } = require("process")
const { crawlPage } = require('./crawl.js')

function main(){
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
    
    crawlPage(baseUrl)
}

main()
