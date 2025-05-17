'use client';

import { ForecastSpace, ForecastSummary } from '@/app/types/forecast';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import ForecastSpaceDetails from './ForecastSpaceDetails';
import { v4 } from 'uuid';
import { useState } from 'react';
export interface ForecastListItemProps {
  summary: ForecastSummary;
  spaces: ForecastSpace[];
  isCollapseable?: boolean;
}

export default function ForecastListItem({
  summary,
  spaces,
  isCollapseable = false,
}: ForecastListItemProps) {
  const { date, temperature, weather } = summary;

  /***
   * Only show details when panel is expanded
   * This means that hidden panel will not be added to our virtual dom
   * This will have better impact on reconcilation process and also less intial bundle size and thus better TTFB and FCP
   * We only exapnd all weather items when user agent is bot
   **/
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(prev=>!prev);

  
  
  return (
    <details
      className='group rounded-lg border shadow-sm bg-white transition'
      open={!isCollapseable}
    >
      <summary
        onClick={toggleOpen}
        className='flex items-center justify-between px-4 py-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition'
      >
        <div>
          <div className='text-sm text-gray-500'>
            {date && new Date(date).toDateString()}
          </div>
          <div className='font-medium'>
            {temperature.min}°C – {temperature.max}°C
          </div>
        </div>

        <div className='flex items-center gap-3'>
          {weather.iconUrl && (
            <Image
              src={weather.iconUrl}
              alt={weather.text ?? 'Weather'}
              width={50}
              height={50}
            />
          )}

          {isCollapseable && (
            <ChevronDown
              className='h-5 w-5 text-gray-400 transition-transform duration-300 group-open:rotate-180'
              aria-hidden='true'
            />
          )}
        </div>
      </summary>

      {(!isCollapseable || isOpen) && (
        <div
          aria-label={`${date}-details`}
          className='grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-4'
        >
          {spaces.map((space) => (
            <ForecastSpaceDetails space={space} key={v4()} />
          ))}
        </div>
      )}
    </details>
  );
}
