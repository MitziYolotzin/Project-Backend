const jwt = require('jsonwebtoken');
const config = require('../../../../config/env/config');

const tokenVerification = async (req,res,next) => {

    let token = req.headers['x-access-token'];
    
    if (!token){
        res.status(401).json({
            sucess: false,
            msg: 'No token provided',
            errors : [{
                "msg" : 'No token provided'
            }]
        });
    } 
    
    jwt.verify(token,config.secret , (err,decoded) => {
        if(err){
            res.status(401).json({
                sucess: false,
                msg: 'Invalid Token',
                errors : [{
                    "msg" : 'Invalid Token'
                }]
            });
        }
        
        next();
    });
}

module.exports = tokenVerification;