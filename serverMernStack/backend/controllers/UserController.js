
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



//@desc Get users
//@route GET /api/users
//@access Private
const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})



//@desc Set user
//@route POST /api/users
//@access Private
const setUser = asyncHandler(async (req, res) => {
    const user = await User.create({
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        idCard: req.body.idCard,
        email: req.body.email,
        password: req.body.password,
        hospitalName: req.body.hospitalName,
        hospitalID: req.body.hospitalID,
        role: req.body.role  ===  undefined ?  "user" : req.body.role
    })
    res.status(200).json(user)

})




//@desc Update user
//@route PUT /api/users/:id
//@access Private
const putUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('user id not found')
    }
   
    const updateduser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateduser)
})



//@desc Delete user
//@route DELETE /api/users/:id
//@access Private
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('user id not found')
    }
    const deleteuser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json({id:req.params.id})
})



//@desc Get user
//@route GET /api/users/:id
//@access Private
const getUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400)
        throw new Error('user id not found')
    }
    res.status(200).json(user)
})



module.exports = {
    getUsers,
    setUser,
    putUser,
    deleteUser,
    getUser
}