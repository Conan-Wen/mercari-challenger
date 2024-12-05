import { ClassValue } from "class-variance-authority/types"
import { twMerge } from "tailwind-merge"
import clsx from "clsx"

export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(':')
  return `${hours}:${minutes}`
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

