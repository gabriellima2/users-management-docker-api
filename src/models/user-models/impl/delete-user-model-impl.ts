import { UserEntity } from "../../../entities/user-entity";

import { DeleteUserProtocols } from "../../../protocols/user-protocols/delete-user-protocols";
import { DeleteUserModel } from "../delete-user-model";

import { usersDB } from "../../../data/users-db";

export class DeleteUserModelImpl implements DeleteUserModel {
  execute(id: string): DeleteUserProtocols.Response {
    if (!id) return { statusCode: 404, data: null, error: "ID parameter is required" };
    let deletedUser: UserEntity | undefined;
    usersDB.filter((user) => {
      if (user.id !== id) return user;
      deletedUser = user;
    });
    if (!deletedUser) return { statusCode: 500, data: null, error: "The user does not exist" };
    return { statusCode: 200, data: deletedUser  };
  }
}