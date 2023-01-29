const { body } = require("express-validator")

const loginValidator = () => {
  return [
    body("email").isEmail().withMessage("Помилка ведення"),
    body("password")
      .isLength({ min: 5, max: 20 })
      .withMessage("Помилка ведення"),
  ]
}

const registrationValidator = () => {
  return [
    body("displayName")
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage("Помилка ведення"),
    body("email").isEmail().withMessage("Помилка ведення"),
    body("password")
      .isLength({ min: 5, max: 20 })
      .withMessage("Помилка ведення"),
  ]
}

const songValidator = () => {
  return [
    body("name").not().isEmpty().trim().escape().withMessage("Помилка ведення"),
    body("body").not().isEmpty().trim().escape().withMessage("Помилка ведення"),
  ]
}

const folderValidator = () => {
  return [
    body("name").not().isEmpty().trim().escape().withMessage("Помилка ведення"),
  ]
}

module.exports = { loginValidator, registrationValidator, songValidator,folderValidator }
