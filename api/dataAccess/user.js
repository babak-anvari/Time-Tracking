import UserModel from './models/user';
import { connectdb } from './database';
import { User } from '../entities/user';

export const create = async userInfo => {
  connectdb();
  let user = new UserModel(userInfo);
  user = await user.save();
  user = user ? new User(user) : null;
  return user;
}

export const find = async userEmail => {
  connectdb();
  let userinfo = await UserModel.findOne({ email: userEmail });
  let user = userinfo ? new User(userinfo) : null;
  return user;
}

export const checkpassword = async userEmail => {
  connectdb();
  let userinfo = await UserModel.findOne({ email: userEmail });
  let user = userinfo ? userinfo : null;
  return user;
}

export const update = async userInfo => {
  connectdb();
  let user = await UserModel.findByIdAndUpdate(
    { _id: userInfo._id },
    {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      currentPosition: userInfo.currentPosition,
      employmentDate: userInfo.employmentDate,
    },
    { new: true }
  )

  return user;
}