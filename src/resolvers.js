import { users } from './db'

const resolvers = {
    Query: {
        user: (parent, { id }) => {
            return users.find(user => user.id === parseInt(id))
        },
        users: () => {
            return users;
        }
    },
    Mutation: {
        createUser: (parent, { id, name, email, age }) => {
            let newUser = { id: parseInt(id), name, email, age };
            users.push(newUser);
            return newUser;
        },
        updateUser: (parent, { id, name, email, age }) => {
            let existingUser = users.find(user => user.id === parseInt(id));
            existingUser.email = email;
            existingUser.name = name;
            existingUser.age = age;

            return existingUser
        },
        deleteUser: (parent, { id }) => {
            let existingUserIndex = users.findIndex(user => user.id == parseInt(id));

            if (existingUserIndex === -1) throw Error("User not found.");

            const deletedUser = users.splice(existingUserIndex, 1);

            return deletedUser
        }
    }
}

export default resolvers;