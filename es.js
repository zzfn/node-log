const {Client} = require('@elastic/elasticsearch')

let client = new Client({
    node: process.env.HOST
})

async function run(query) {
    let {body, index} = query
    body = JSON.parse(Buffer.from(body, 'base64').toString('ascii'))
    await client.index({
        index,
        body
    })
}

module.exports = run
