import Realm from 'realm';
import isEmpty from 'lodash.isempty';

import UserSchema from '../models/User';

var key = new Int8Array(64);

const connectToDB = async () => {
  return await new Realm({schema: [UserSchema], encryptionKey: key});
};

export const signupUser = async (user) => {
  const realm = await connectToDB();

  return new Promise((resolve, reject) => {
    const alreadyExist = realm
      .objects('User')
      .filtered(`username == "${user.username}"`);
    console.log(alreadyExist);

    if (!isEmpty(alreadyExist)) {
      return resolve({
        success: false,
        message: 'User already exist.',
      });
    }

    realm.write(() => {
      realm.create('User', user);
    });

    realm.close();

    return resolve({
      success: true,
      message: 'User created Successfully',
    });
  });
};

export const loginUser = async (loginInfo) => {
  const realm = await connectToDB();

  return new Promise((resolve, reject) => {
    const user = realm
      .objects('User')
      .filtered(
        `username == "${loginInfo.username}" && password == "${loginInfo.password}"`,
      );

    console.log(user);

    if (isEmpty(user)) {
      return resolve({
        success: false,
        message: 'User not exist.',
      });
    }

    return resolve({
      success: true,
      message: 'Logged in successfully',
    });
  });
};
