const root = async (req, res) => {
    const info = [ // TODO: make a function that takes swajjer json and generate this
        {
            path: "/api/v2/user",
            url: "https://auth.borjamediavilla.com/api/v2/user",
            description: "Get info about Endpoint. Return info",
            methods: {
                get: {
                    "summary": "Info about /user Endpoint",
                    "description": "Return an explanation of endpoint"
                },
                post: {
                    "description": "TODO Add the role LATER",
                    "summary": "CREATE an User by request"
                }
            }
        },
        {
            path: "/api/v2/user/{userId}",
            url: "https://auth.borjamediavilla.com/api/v2/user/{userId}",
            description: "operations in User from specific id. Need to have a valid token.",
            methods: {
                get: {
                    "operationId": "getUserId",
                    "summary": "READ info about certain user",
                    "description": "provide an id (and a valid token) to get the info of the user the id belongs"
                },
                put: {
                    "summary": "UPDATE user",
                    "description": "Modify current info of user",
                },
                delete: {
                    "summary": "DELETE the user",
                    "description": "Give an ID and I will delete the user that belongs to"
                }
            }
        },
        {
            path: "/api/v2/users",
            url: "https://auth.borjamediavilla.com/api/v2/users",
            description: "Operations made with all the users",
            methods: {
                get: {
                    "summary": "Get a list of all users",
                    "description": "Returns an array of all users registered",
                }
            }
        }
    ]
    return res.status(200).send({
        success: true,
        msg: "The /user route is about CRUD operations on User database",
        data: info
    });
};

module.exports = root;