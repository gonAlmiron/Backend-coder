import {UserModel} from '../models/user'


const find = (id) => {
    if (id) return UserModel.findById(id);
  
    return UserModel.find();
  };

  const findByName = (username) => UserModel.findOne({ username });

  const create = (newUser) => UserModel.create(newUser);

  const update = (id, data) =>
  UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

  const remove = (id) => UserModel.findByIdAndDelete(id);

  export default {
    find,
    findByName,
    create,
    update,
    remove,
  };