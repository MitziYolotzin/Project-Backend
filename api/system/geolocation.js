const axios = require('axios');

const geolocation = (req, res) => {
    const { ip } = req.body
    try {
        axios.get(`http://api.ipstack.com/${ip}?access_key=1e21dd9a5574e4477866cbc24f338fe9`) // TODO: change to key on .env
        .then((resp) => {
            const lang = resp.data
            if (lang) {
                console.log('lang retrieved: \n')
                res.status(200).json(
                    { 
                        success: true, 
                        msg: 'OK',
                        data: lang 
                    }
                );
            }
            else {
                console.log('localLang response error',resp)
                res.status(204).json(
                    { 
                        success: false, 
                        msg: 'NO CONTENT',
                        data: lang  
                    }
                )
            }
        })
        .catch((error) => {
            console.error('localLang response api', error.info)
            res.status(404).json(
                { 
                    success: false, 
                    error,
                    msg: 'NOT FOUND',
                    data: {
                        lang: {} 
                    }
                }
            )
        })
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                sucess: false,
                msg: "Client Sent Incorrect or incomplete Data",
                errors: error
            }
            );
    }
    
}

module.exports = geolocation;