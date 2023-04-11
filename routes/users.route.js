import db from "../mockdb/index.js";
import express from "express";

const userRouter = express.Router();

userRouter.get("/:id?", async (req, res, next) => {
  try {
    // TODO
    let data;
    let { id } = req.params;
    if (id) {
      data = await db.getOne(id);
    } else {
      data = await db.getAll();
    }
    res.json(data);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/", async (req, res, next) => {
  let data;
  try {
    // TODO
    let newUser = req.body;
    data = await db.add(newUser);
  } catch (error) {
    next(error);
  }
  res.json(data);
});

userRouter.put("/:id", async (req, res, next) => {
  let data;
  try {
    // TODO
    let { id } = req.params;
    let updatedUser = req.body;
    data = await db.update(id, updatedUser);
  } catch (error) {
    next(error);
  }
  res.json(data);
});

userRouter.delete("/:id", async (req, res, next) => {
  let data;
  try {
    // TODO
    let { id } = req.params;
    data = await db.remove(id);
  } catch (error) {
    next(error);
  }
  res.json(data);
});

export default userRouter;
