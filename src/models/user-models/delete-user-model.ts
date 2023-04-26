import { DeleteUserProtocols } from "../../protocols/user-protocols/delete-user-protocols";

export interface DeleteUserModel {
  execute(id: string): DeleteUserProtocols.Response;
}
