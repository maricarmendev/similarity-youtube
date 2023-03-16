import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // twMerge will merge the tailwind classes and clsx will remove falsies and will construct classes from conditionals
  return twMerge(clsx(inputs));
}
