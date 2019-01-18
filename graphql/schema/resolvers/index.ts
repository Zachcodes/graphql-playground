const { merge } =  require('lodash');
const students = require('./students')

const resolvers = merge(students)

module.exports = resolvers;