import { GetUsersProtocols } from "../../../protocols/user-protocols/get-users-protocols";
import { GetUsersModel } from "../get-users-model";

import { usersDB } from "../../../data/users-db";

export class GetUsersModelImpl implements GetUsersModel {
  execute(): GetUsersProtocols.Response {
    return { statusCode: 200, data: usersDB  };
  }
}
