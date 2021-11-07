import { Request, Response, NextFunction } from "express";
import { BadRequestError } from "../helpers/errorHelpers";

import userModel from "../model/userModel";
import userServices from "../services/userServices";

//POST/creates Users
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      firstName,
      lastName,
      username,
      country,
      postcode,
      email,
      password,
      address,
      sex,
      product = [],
    } = req.body;
    const user = new userModel({
      username,
      lastName,
      country,
      email,
      password,
      postcode,
      address,
      sex,
      product,
    });
    const createdUser = await userServices.createUser(user);
    res.json(createdUser);
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userServices.findUserByEmail(req.body.email);
    res.status(201).end();
  } catch (error) {
    if (error instanceof Error && error.name == "ValidationError") {
      next(new BadRequestError("Invalid Request", error));
    } else {
      next(error);
    }
  }
};
