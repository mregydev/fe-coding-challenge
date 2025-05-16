// components/ForecastList.tsx
import ForecastListItem from './ForecastListItem';
import { ForecastWeatherNearby } from '@/app/types/forecast';

export interface ForecastListProps {
  data: ForecastWeatherNearby;
  defaultOpenAll?: boolean;
}

export default function ForecastList({
  data,
  defaultOpenAll = false,
}: ForecastListProps) {
  return (
    <div className='space-y-4'>
      {data.items.map((item, index) => (
        <ForecastListItem
          key={index}
          summary={item.summary}
          spaces={item.spaces}
          defaultOpen={defaultOpenAll}
        />
      ))}
    </div>
  );
}
