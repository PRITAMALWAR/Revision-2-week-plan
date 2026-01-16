const express = require('express');
const validate = require('../middleware/validate');
const registerSchema = require('../validators/register.schema');

const router = express.Router();

router.post('/register', validate(registerSchema), (req, res) => {
  res.status(201).json({
    success: true,
    message: 'User registered successfully'
  });
});

module.exports = router;
