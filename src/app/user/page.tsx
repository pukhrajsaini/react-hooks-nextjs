"use client";
import { useEffect, useReducer } from "react";
import UserList from "./components/UserList";

const UserRoute = () => {
  const userData = [
    {
      id: 1,
      name: "Pukhraj",
      age: 27,
      admin: true,
    },
    {
      id: 2,
      name: "Shiv",
      age: 26,
      admin: false,
    },
    {
      id: 3,
      name: "Umer",
      age: 29,
      admin: false,
    },
    {
      id: 4,
      name: "Hardik",
      age: 29,
      admin: false,
    },
  ];

  const reducerMethod = (users: any, action: any) => {
    switch (action.type) {
      case "deleteUser": {
        return users.filter((user: any) => user.id !== action.id);
      }
      case "addUser": {
        if (!users.find((e: any) => e.id === action.newUser.id)) {
          return [...users, action.newUser];
        }
        return users;
      }
      case "updateUser": {
        return users.map((user: any) => {
          if (user.id == action.updatedUser.id) return action.updatedUser;
          return user;
        });
      }
    }
  };
  const [users, dispatch] = useReducer(reducerMethod, userData);

  const handleUpdateUser = (updatedUser: any) => {
    dispatch({
      type: "updateUser",
      updatedUser: updatedUser,
    });
  };

  const handleAddUser = (newUser: any) => {
    dispatch({
      type: "addUser",
      newUser: newUser,
    });
  };

  const handleDeleteUser = (userId: number) => {
    dispatch({
      type: "deleteUser",
      id: userId,
    });
  };

  useEffect(() => {
    handleDeleteUser(2);
    // console.log("user Effect");
    handleAddUser({ id: 123, name: "ABC", admin: false, age: 13 });
  }, []);

  return (
    <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Admin</th>
        </tr>
      </thead>
      <tbody>
        {users.map((e: any) => (
          <UserList props={e} />
        ))}
      </tbody>
    </table>
  );
};
export default UserRoute;
