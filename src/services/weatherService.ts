import { apiFetch } from '@/lib/api';
import { ForecastWeatherNearby } from '../app/types/forecast';
import { Location } from '../app/types/location';


/**
 * 
 * @param locationCode 
 * @returns location info by code — cached forever
 * Caching here play important role in faster response and thus faster page load 
 */
export async function fetchLocationByCode(
  locationCode: string
): Promise<Location> {
  return await apiFetch<Location>(`/locations/${locationCode}`);
}

/**
 * 
 * @param lat 
 * @param lng 
 * @returns forecastWeather
 * Caching here play important role in faster response and thus faster page load 
 */
export async function fetchForecast(
  lat: number,
  lng: number
): Promise<ForecastWeatherNearby> {
  return await apiFetch<ForecastWeatherNearby>(
    `/weather/forecast/${lat}/${lng}/`,
    86400
  );
}
