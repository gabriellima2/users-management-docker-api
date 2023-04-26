import { GetUsersProtocols } from "../../protocols/user-protocols/get-users-protocols";

export interface GetUsersModel {
  execute(): GetUsersProtocols.Response;
}