const express = require('express')
const router = express.Router()
const { newTotalCase } = require('../controllers/mapController')


router.route('/:provinceName').get(newTotalCase)


// router.get('/', getUsers)
// router.post('/',postUser)

// router.put('/:id', putUser)
// router.delete('/:id', deleteUser)

module.exports = router