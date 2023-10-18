const { argv } = require("process")

function main(){
    if (process.argv.length < 3) {
        console.log('no website provided !')
        process.exit(1)
    } else if (process.argv.length > 3){
        console.log('wrong number of args !')
        process.exit(1)
    }
    console.log(`Crawler is starting at : ${process.argv[2]}`)

}

main()