const root = async (req,res) => {
    const info = [
         {
            path: "/api/v2/auth",
            url: "https://auth.borjamediavilla.com/api/v2/auth",
            description: "Get info about Endpoint. Return info",
            methods:{
                get: {
                    "summary": "get Info about /auth Endpoint",
                    "description": "Get Info"
                }
            }
          },
          {
             path: "/api/v2/auth/login",
             url: "https://auth.borjamediavilla.com/api/v2/auth/login",
             description: "Get jwt token with your email and password. Send me your credentials, I'll tell you if you can enter",
             methods:{
                post: {
                    "summary": "Validate your user to use KeywordsTool",
                    "description": "Given email and password, create and return jwt token and DB id"
                  }
             }
           },
           {
              path: "/api/v2/auth/signup",
              url: "https://auth.borjamediavilla.com/api/v2/auth/signup",
              description: "Create user in database of Users. Give an name, an email, and a password, we register all in our databases",
              methods:{
                  get: {
                      "summary": "get Info about /auth Endpoint",
                      "description": "Get Info"
                  }
              }
            }
        ]
    return res.status(200).send({
        success: true,
        msg: "The /auth route is about authentification and get jwt token to gain acces to data",
        data: info
    }); 
};

module.exports = root;