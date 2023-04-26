import express, { type Request, type Response } from "express";

import { makeDeleteUserModelImpl } from "../factories/models/user-models/make-delete-user-model-impl";
import { defaultResponse } from "../helpers/default-response";

type UserById = {
	id: string;
}

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  res.send("Root path");
});

router.delete("/:id", (req: Request<UserById>, res: Response) => {
  const { id } = req.params;
  const deleteUserModel = makeDeleteUserModelImpl();
  const response = deleteUserModel.execute(id);

  if (response.error) return defaultResponse(res, { status: response.statusCode, body: response.error });
  if (response.data) return defaultResponse(res, { status: response.statusCode, body: response.data });
  return defaultResponse(res, { status: 500, body: "Unexpected internal server error" })
});

export const userRoutes = router;
