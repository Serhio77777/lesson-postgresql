const router = require('express').Router()
const service = require('./service')
const authentication = require('./passport-middleware')
const validate = require('../middleware/validate-middleware')
const validator = require('./validator')

router.post('/login', authentication, (req, res, next) => {
    res.status(200).send('Login')
})

router.get('/get', (req, res, next) => {
    service
        .get()
        .then((data) => res.send(data))
        .catch(next)
})

router.get('/get-one/:id', (req, res, next) => {
    service
        .getOne(req.params.id)
        .then((data) => res.send(data))
        .catch(next)
})

router.post('/create', validate(validator.create), (req, res, next) => {
    service
        .create(req.body)
        .then((data) => res.send(data))
        .catch(next)
})

router.put('/update/:id', validate(validator.update), (req, res, next) => {
    service
        .update(req.params.id, req.body)
        .then(() => res.send('Success!'))
        .catch(next)
})

router.delete('/delete/:id', (req, res, next) => {
    service
        .remove(req.params.id)
        .then(() => res.send('Success!'))
        .catch(next)
})

module.exports = router