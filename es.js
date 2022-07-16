const {Client} = require('@elastic/elasticsearch')

let client = new Client({
    node: process.env.HOST,
    auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

async function run(query) {
    let {body, index} = query
    if (!body || !index) return
    body = JSON.parse(Buffer.from(body, 'base64').toString('ascii'))
    await client.index({
        index,
        body
    })
}

module.exports = run
