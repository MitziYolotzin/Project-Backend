
const {
    name,
    version,
    description,
    author
} = require('../../package.json')

const ping = (_req, res) => {
    res.status(200).json({
        name,
        description,
        version,
        author,
        uptime: process.uptime()
    })
}

module.exports = ping