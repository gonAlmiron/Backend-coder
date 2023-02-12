import {UserModel} from '../models/user'


  const findByID = (id) => {
    if (id) return UserModel.findById(id);
  
    return UserModel.find();
  };

const find = (username, password) => UserModel.findOne({ username, password });

const create = (username, password) => UserModel.create(username, password);

const update = (id, data) =>
  UserModel.findByIdAndUpdate(id, data, {
    new: true,
  });

const remove = (id) => UserModel.findByIdAndDelete(id);

export default {
  find,
  findByID,
  create,
  update,
  remove
}

