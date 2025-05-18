import { format, parseISO } from 'date-fns';

export function printTime(date:string){
  return format(parseISO(date), 'HH:mm')
}

export function getSecondsUntilMidnight(): number {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0); // midnight
  return Math.floor((tomorrow.getTime() - now.getTime()) / 1000);
}
