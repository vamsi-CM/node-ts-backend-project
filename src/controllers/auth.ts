import { Request, Response } from 'express';

interface User {
  userId: number;
  email: string;
  name: string;
  pass: string;
}

// eslint-disable-next-line no-shadow
enum Message {
  ValidCred = 'Logged in Succesfully',
  InvalidCred = 'Invalid User Credentials/UnRegistered',
  RegSuccess = 'Registration Succesful',
  RegFailure = 'Registration Unsuccesful',
  UserExists = 'User Already Exists',
}
const users: User[] = [
  {
    userId: 1,
    email: 'bulusu.vk08@gmail.com',
    name: 'vamsi',
    pass: 'citymall',
  },
  {
    userId: 2,
    email: 'xyz@gmail.com',
    name: 'abc',
    pass: 'test',
  },
];
const getUsers = (): User[] => {
  return users;
};

const helperMessage = (res: Response, statusCode: number, message: string) => {
  return res.status(statusCode).json({
    msg: message,
  });
};

const validateUser = (user: any): boolean => {
  const userList: User[] = getUsers();
  for (let i = 0; i < userList.length; i += 1) {
    if (userList[i].email === user.email && userList[i].pass === user.pass) return true;
  }
  return false;
};

const login = async (req: Request, res: Response) => {
  const user: object = req.body;
  const isValid: boolean = validateUser(user);
  if (isValid) {
    return helperMessage(res, 200, Message.ValidCred);
  }
  return helperMessage(res, 400, Message.InvalidCred);
};

const register = async (req: Request, res: Response) => {
  const user: User = req.body;
  const exists: boolean = validateUser(user);
  if (!exists) {
    users.push(user);
    return helperMessage(res, 200, Message.RegSuccess);
  }
  return helperMessage(res, 400, Message.UserExists);
};

export default { login, register };
