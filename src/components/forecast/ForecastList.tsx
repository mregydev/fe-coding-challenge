import { v4 } from 'uuid';
import ForecastListItem from './ForecastListItem';
import { ForecastWeatherNearby } from '@/app/types/forecast';

export interface ForecastListProps {
  data: ForecastWeatherNearby;
  isCollapseable?: boolean;
}

export default function ForecastList({
  data,
  isCollapseable = false,
}: ForecastListProps) {
  return (
    <div className='space-y-4'>
      {data.items.map((item, index) => (
        <ForecastListItem
          key={v4()}
          summary={item.summary}
          spaces={item.spaces}
          isCollapseable={isCollapseable}
        />
      ))}
    </div>
  );
}
