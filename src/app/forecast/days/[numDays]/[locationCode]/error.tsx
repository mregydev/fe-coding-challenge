'use client';

export interface ErrorPageProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh] text-center px-4'>
      <h2 className='text-2xl font-semibold mb-2'>Something went wrong</h2>
      <p className='text-gray-600 mb-4'>
        We couldn’t load the weather forecast. Please try again later.
      </p>
      <button
        onClick={() => reset()}
        className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
      >
        Try again
      </button>
    </div>
  );
}
