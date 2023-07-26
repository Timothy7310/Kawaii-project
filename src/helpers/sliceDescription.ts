import { maxDescriptionLength } from '@/app/constants/index';

export const sliceDescription = (description: string) => {
  if (description.trim().length >= maxDescriptionLength) {
    return `${description.slice(0, maxDescriptionLength - 5)}...`;
  }
  return description;
};
