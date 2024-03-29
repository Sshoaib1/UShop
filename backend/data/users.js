import bcrypt from "bcryptjs";

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Muhammad Shoaib',
        email: 'muhammadshoaibrizwan@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ushna Basir',
        email: 'ushnabasit@gmail.com',
        password: bcrypt.hashSync('123456', 10),
    },
];

export default users;