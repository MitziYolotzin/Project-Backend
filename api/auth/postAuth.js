
var UserModel = require('../model/userModel');

const postAuth = (req, res) => {
// paso 1
    const {email, password} = req.body;

// paso 2

    const user = UserModel.findOne({ 'email': email }, 'Lookout for coincidence', function (err, userDB) {
        if (err) return handleError(err);
        console.log('%s existe', userDB.mail);
      });

    const DBPASS = user.password;
    
    // paso 3

    if (password === DBPASS){
        const token = generateToken()
    } else {
        return res.status(409).json({
            error: "No esta autorizado joven"
        })
    }

//  paso 4
    return res.status(200).json({
        token
    })
}