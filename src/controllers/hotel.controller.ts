import { Request, Response, NextFunction } from "express";
import { createHotelService, getHotelByIdService } from "../services/hotel.service.js";

export async function createHotelHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await createHotelService(req.body);
  res.status(201).json({
    message: "Hotel created successfully",
    success: true,
    data: hotelResponse
  });
}

export async function getHotelByIdHandler(req: Request, res: Response, next: NextFunction) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));
  res.status(200).json({
    message: "Hotel found successfully",
    success: true,
    data: hotelResponse
  });
}

// TODO: implement this
export async function getAllHotelsHandler(req: Request, res: Response, next: NextFunction) {
  res.status(501);
}

// TODO: implement this
export async function deleteHotelHandler(req: Request, res: Response, next: NextFunction) {
  res.status(501);
}

// TODO: implement this
export async function updateHotelHandler(req: Request, res: Response, next: NextFunction) {
  res.status(501);
}
