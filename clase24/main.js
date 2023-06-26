// dotenv

// const dotenv = require('dotenv')

// dotenv.config()

// console.log(process.env.VARIABLE_UNO)


// primera forma de hacerlo, pasarlas de a una

// import { multiply } from './utils.js'

// console.log(multiply(20, 5))

// la segunda forma de importarlo

import utils from './utils.js'

console.log(utils.multiply(20, 5))
