let users = []

export const addUser = (id, username, room) => {
    const user = {
      id,
      username,
      room,
    };
  
    users.push(user);
    console.log('CLIENTES ACTIVOS');
    console.log(users)
  };
  
  export const removeUser = (id) => {
    users = users.filter((aUser) => aUser.id !== id);
  };
  
  export const getCurrentUser = (id) => {
    return users.find((aUser) => aUser.id === id);
  };
  
  export const getRoomUsers = (room) => {
    return users.filter((aUser) => aUser.room === room);
  };