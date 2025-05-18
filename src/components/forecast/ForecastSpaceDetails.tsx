import { ForecastSpace } from '@/app/types/forecast';
import { printTime } from '@/lib/utils';


export interface ForecastSpaceDetailsProps {
  space: ForecastSpace;
}

export default function ForecastSpaceDetails({ space }: ForecastSpaceDetailsProps) {
  const { typeLabel, temperature, weather,from,to } = space;

  return (
    <div
      aria-label={`${typeLabel}-details`}
      className='border rounded-xl p-3 shadow-sm bg-gray-50 hover:bg-gray-100 transition'
    >
      <div aria-label='type-label' className='text-xs text-gray-500'>
        {typeLabel}
      </div>
      <div aria-label='min temp-max temp' className='font-semibold'>
        {temperature.min}°C – {temperature.max}°C
      </div>
      {weather.iconUrl && (
        <img
          src={weather.iconUrl}
          alt={weather.text ?? `${typeLabel}-weather-icon`}
          width={60}
          height={60}
          loading='lazy'
        />
      )}
      {weather.text && (
        <div
          aria-label={`${typeLabel}-weather-text`}
          className='text-xs text-gray-500 mt-1'
        >
          {weather.text}
        </div>
      )}
      {from && to && (
        <div
          aria-label={`${typeLabel} from - to`}
          className='text-xs text-gray-500 mt-1'
        >
          {printTime(from)} - {printTime(to)}
        </div>
      )}
    </div>
  );
}
