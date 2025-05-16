import { headers } from 'next/headers';
import {isbot} from 'isbot';

/**
 * 
 * @returns true is userAgent is bot otherwise false
 */
export async function isUABot(){
  const ua = (await headers()).get('user-agent') || '';
  return isbot(ua);
}