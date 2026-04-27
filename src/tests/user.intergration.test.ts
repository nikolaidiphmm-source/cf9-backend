import { TestServer } from './testSetup';
import  userRouter  from '../routes/user.routes';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';

dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET || 'test_secret';


const server = new TestServer();
server.app.use('/users', userRouter);

describe('User API Tests', () => {
    beforeAll(async() => {
        await server.start();
        const hash = await bcrypt.hash("123456", 10);
        const user = User.create({username: "testUser", password: hash, roles: []});
        const payload = { username: user.username, email: user.email, roles: user.roles }
        token = jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
    });
    // afterAll(async() => {
    //     await server.stop()
    // });

    test("GET /users -> return all users", async() => {

    })
});