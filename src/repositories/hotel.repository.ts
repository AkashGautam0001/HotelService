import logger from "../config/logger.config.js";
import Hotel from "../db/models/hotel.js";
import { createHotelDto } from "../dto/hotel.dto.js";
import { NotFoundError } from "../utils/errors/app.error.js";

export async function createHotel(hotelData: createHotelDto) {
  const hotel = await Hotel.create(hotelData);
  logger.info(`Hotel created: ${hotel.id}`);
  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await Hotel.findByPk(id);
  if (!hotel) {
    logger.error(`Hotel not found: ${id}`);
    throw new NotFoundError(`Hotel not found: ${id}`);
  }
  logger.info(`Hotel found: ${hotel.id}`);
  return hotel;
}
