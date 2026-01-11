import { createHotelDto } from "../dto/hotel.dto.js";
import { createHotel, getHotelById } from "../repositories/hotel.repository.js";

export async function createHotelService(hotelData: createHotelDto) {
  const hotel = await createHotel({
    name: hotelData.name,
    address: hotelData.address,
    location: hotelData.location,
    rating: hotelData.rating,
    ratingCount: hotelData.ratingCount
  });
  return hotel;
}

export async function getHotelByIdService(id: number) {
  const hotel = await getHotelById(id);
  return hotel;
}
