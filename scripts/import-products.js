const fs = require('fs');
const https = require('http')

async function exportProduct(hostname, product) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(product)

        const options = {
            hostname,
            port: 8081,
            path: '/api/service-boarding/boarding',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = https.request(options, res => {
            // console.log(`statusCode: ${res.statusCode}`)

            res.on('data', d => {
                // process.stdout.write(d)
                resolve(d.toString('utf8'))
            })
        })

        req.on('error', error => {
            // console.error(error)
            reject(error)
        })

        req.write(data)
        req.end()
    })
}

async function main() {
    const HOSTNAME = process.env.ENDPOINT
    const DATA_PATH = process.env.DATA_PATH

    if (!HOSTNAME) {
        console.error("ENDPOINT of the boarding-service must be specified")
        exit(1)
    }

    if (!DATA_PATH) {
        console.error("DATA_PATH of the json with products must be specified")
        exit(1)
    }

    const rawdata = fs.readFileSync(DATA_PATH);
    const data = JSON.parse(rawdata);

    const products = data && data.products
    if (!products) {
        console.error("Products were not found")
        exit(1)
    }

    for (const product of products) {
        console.log("Product: " + product.title)
        const response = await exportProduct(HOSTNAME, product)
        console.log(response)
    }

}

main()
    .then(() => console.log("Job finished successfully"))
    .catch(err => console.log(err))