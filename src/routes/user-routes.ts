import express, { type Request, type Response } from "express";

const router = express.Router()

router.get("/", async (req: Request, res: Response) => {
  res.send("Root path");
});

router.get("/:id", async (req: Request, res: Response) => {
  res.send("Root path with params");
});

export const userRoutes = router;
