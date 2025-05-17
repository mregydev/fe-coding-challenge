import { format, parseISO } from 'date-fns';

export function printTime(date:string){
  return format(parseISO(date), 'HH:mm')
}