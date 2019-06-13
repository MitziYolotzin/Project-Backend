const express = require('express');
let userRouter = express.Router();
let { 
    root, 
    getUserAll,
    postUser,       // CREATE
    getUserId,      // READ
    putUserId,      // UPDATE
    deleteUserId    // DELETE
} = require('./action');
let { 
    tokenVerification
} = require('./middleware');

userRouter.get('/', root);
userRouter.post('/', tokenVerification, postUser);
userRouter.get('/:id', tokenVerification, getUserId);
userRouter.put('/:id', tokenVerification, putUserId);
userRouter.delete('/:id', tokenVerification, deleteUserId);
userRouter.get('/all', tokenVerification, getUserAll);

module.exports = userRouter;