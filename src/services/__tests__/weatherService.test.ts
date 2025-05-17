
import { fetchLocationByCode, fetchForecast } from '../weatherService';
import { apiFetch } from '@/lib/api';

jest.mock('@/lib/api', () => ({
  apiFetch: jest.fn(),
}));

const mockedApiFetch = apiFetch as jest.Mock;

describe('weatherService', () => {
  it('should call apiFetch with correct URL and return location data', async () => {
    const mockLocation = {
      code: 'ABC123',
      name: 'Test City',
      lat: 12.34,
      lng: 56.78,
    };

    mockedApiFetch.mockResolvedValueOnce(mockLocation);

    const result = await fetchLocationByCode('ABC123');

    expect(mockedApiFetch).toHaveBeenCalledWith('/locations/ABC123');
    expect(result).toEqual(mockLocation);
  });

  it('should call apiFetch with correct URL and cache duration, and return forecast data', async () => {
    const mockForecast = {
      forecast: [
        {
          space: 'Outdoor',
          temperature: { min: 10, max: 20 },
          weather: { iconUrl: '/sunny.png', text: 'Sunny' },
          from: '2023-06-01T10:00:00.000Z',
          to: '2023-06-01T12:00:00.000Z',
        },
      ],
    };

    mockedApiFetch.mockResolvedValueOnce(mockForecast);

    const result = await fetchForecast(12.34, 56.78);

    expect(mockedApiFetch).toHaveBeenCalledWith(
      '/weather/forecast/12.34/56.78/',
      86400
    );
    expect(result).toEqual(mockForecast);
  });

});

