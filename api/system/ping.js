
const {
    name,
    version
} = require('../../package.json')

const ping = (_req, res) => {
    res.status(200).json({
        name,
        version,
        uptime: process.uptime()
    })
}

module.exports = ping