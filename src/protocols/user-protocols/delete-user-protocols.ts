import { UserEntity } from "../../entities/user-entity";

export namespace DeleteUserProtocols {
  export type Response = {
    error?: string;
    data?: UserEntity | null
    statusCode: number;
  }
}
