const express = require('express')
const router = express.Router()
const { getUsers,setUser,putUser,deleteUser,getUser } = require('../controllers/UserController')


router.route('/').get(getUsers).post(setUser)
router.route('/:id').put(putUser).delete(deleteUser).get(getUser)


// router.get('/', getUsers)
// router.post('/',postUser)

// router.put('/:id', putUser)
// router.delete('/:id', deleteUser)

module.exports = router