const students = require('../../../students')

const getStudents = () => {
    return students
}


const resolvers = {
    Query: {
        getStudents
    }
}

export default resolvers;