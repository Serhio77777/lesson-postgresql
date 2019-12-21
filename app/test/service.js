const { User } = require('../db/postgres')

const get = () => User.findAll()

const getOne = (id) => User.findOne({
    where: {id: id}
})

const create = (body) => {
    return User.create(body)
}

const update = (id, body) => {
    // Change everyone without a last name to "Doe"
    return User.update(body, {
        where: {
            id: id
        }
    })
}

const remove = (id) => {
    return User.destroy({
        where: {
          id: id
        }
    })
}

module.exports = {
    get,
    getOne,
    create,
    update,
    remove
}