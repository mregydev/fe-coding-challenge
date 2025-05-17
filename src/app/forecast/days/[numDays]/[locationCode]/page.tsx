import ForecastList from '@/components/forecast/ForecastList';
import { headers } from 'next/headers';
import {isbot} from 'isbot';

import { fetchForecast, fetchLocationByCode } from '@/services/weatherService';

import Link from 'next/link';

export interface DaysPageProps {
  params: Promise<{
    locationCode: string;
    numDays: string;
  }>;
}

export default async function DaysPage({ params }: DaysPageProps) {
  const { numDays, locationCode } = await params;

  const location = await fetchLocationByCode(locationCode);
  const forecast = await fetchForecast(
    location.coordinates.latitude,
    location.coordinates.longitude
  );
  
  const isBot = isbot((await headers()).get('user-agent') || '');

  const filteredItems = {
    items: forecast.items.slice(1, parseInt(numDays) + 1),
  };

  return (
    <main className='p-4 max-w-4xl mx-auto'>
      <h1 className='text-xl font-bold mb-4'>
        {numDays}-Day Forecast for {location.name}
      </h1>

      <div className='flex gap-4 mb-6'>
        {['3', '7'].map((day) => (
          <Link
            key={day}
            href={`/this-is-the-forecast-page/${day}-days/${locationCode}.html`}
            className={`px-4 py-2 rounded-md border transition ${
              day === numDays
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
            }`}
          >
            {day}-Day Forecast
          </Link>
        ))}
      </div>

      <ForecastList data={filteredItems} isCollapseable={!isBot} />
    </main>
  );
}
