import { type Response } from "express";

type DefaultResponseParams = {
  status: number;
  body: unknown;
}

export function defaultResponse(res: Response, params: DefaultResponseParams) {
  res.status(params.status).contentType("application/json").json(JSON.stringify(params.body));
}