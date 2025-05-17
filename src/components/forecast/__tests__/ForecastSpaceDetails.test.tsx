// ForecastSpaceDetails.test.tsx
import { render, screen } from '@testing-library/react';
import ForecastSpaceDetails from '../ForecastSpaceDetails';
import { ForecastSpace } from '@/app/types/forecast';

const mockSpace: ForecastSpace = {
  typeLabel: 'Outdoor',
  temperature: {
    min: 10,
    max: 20,
  },
  weather: {
    iconUrl: '/sunny.png',
    text: 'Sunny',
    icon: '',
  },
  from: '2023-06-01T10:00:00.000',
  to: '2023-06-01T12:00:00.000',
};

describe('ForecastSpaceDetails', () => {
  it('renders type label', () => {
    render(<ForecastSpaceDetails space={mockSpace} />);
    expect(screen.getByLabelText('Outdoor-details')).toBeInTheDocument();
    expect(screen.getByLabelText('type-label')).toHaveTextContent('Outdoor');
  });

  it('renders temperature range', () => {
    render(<ForecastSpaceDetails space={mockSpace} />);
    expect(screen.getByLabelText('min temp-max temp')).toHaveTextContent('10°C – 20°C');
  });

  it('renders weather icon and text', () => {
    render(<ForecastSpaceDetails space={mockSpace} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expect.stringContaining('sunny.png'));
    expect(screen.getByLabelText('Outdoor-weather-text')).toHaveTextContent('Sunny');
  });

  it('renders from and to times', () => {
    render(<ForecastSpaceDetails space={mockSpace} />);
    expect(screen.getByLabelText('Outdoor from - to')).toHaveTextContent('10:00 - 12:00'); // Adjusted for time zone
  });

  it('handles missing optional fields', () => {
    const minimalSpace = {
      typeLabel: 'Indoor',
      temperature: { min: 15, max: 22 },
      weather: {},
      from: null,
      to: null,
    };
    render(<ForecastSpaceDetails space={minimalSpace as any} />);
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Indoor-weather-text')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Indoor from - to')).not.toBeInTheDocument();
  });
});
