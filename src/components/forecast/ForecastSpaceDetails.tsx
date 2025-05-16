import { ForecastSpace, ForecastSummary } from '@/app/types/forecast';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export interface ForecastSpaceDetailsProps {
  space: ForecastSpace;
}

export default function ForecastSpaceDetails({ space }: ForecastSpaceDetailsProps) {
  const { typeLabel, temperature, weather,from,to } = space;

  return (
    <div className='border rounded-xl p-3 shadow-sm bg-gray-50 hover:bg-gray-100 transition'>
      <div className='text-xs text-gray-500'>{typeLabel}</div>
      <div className='font-semibold'>
        {temperature.min}°C – {temperature.max}°C
      </div>
      {weather.iconUrl && (
        <Image
          src={weather.iconUrl}
          alt={weather.text ?? 'Weather detail'}
          width={60}
          height={60}
          loading='lazy'
        />
      )}
      {weather.text && (
        <div className='text-xs text-gray-500 mt-1'>{weather.text}</div>
      )}
      {from && to && (
        <div className='text-xs text-gray-500 mt-1'>
          {(new Date(from)).toLocaleTimeString()} - {(new Date(to)).toLocaleTimeString()}
        </div>
      )}
    </div>
  );
}
