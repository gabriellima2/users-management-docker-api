import { UserEntity } from "../../entities/user-entity";

export namespace GetUsersProtocols {
  export type Response = {
    error?: string;
    data?: UserEntity[] | null
    statusCode: number;
  }
}
