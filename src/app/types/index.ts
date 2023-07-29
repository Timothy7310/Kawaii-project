import * as Types from '@/__generated__/types';

export enum MediaActiveTabs {
  Overview = 'OVERVIEW',
  Watch = 'WATCH',
  Characters = 'CHARACTERS',
  Staff = 'STAFF',
  Reviews = 'REVIEWS',
  Stats = 'STATS',
  Social = 'SOCIAL',
}

export type MediaStaffEdge =
  | Array<{
      __typename: 'StaffEdge';
      role?: string | null;
      node?: {
        __typename: 'Staff';
        name?: { __typename: 'StaffName'; full?: string | null } | null;
        image?: { __typename: 'StaffImage'; medium?: string | null } | null;
      } | null;
    } | null>
  | null
  | undefined;

export type MediaCharacters =
  | Array<{
      __typename: 'CharacterEdge';
      role?: Types.CharacterRole | null;
      node?: {
        __typename: 'Character';
        name?: {
          __typename: 'CharacterName';
          userPreferred?: string | null;
          full?: string | null;
        } | null;
        image?: { __typename: 'CharacterImage'; medium?: string | null } | null;
      } | null;
    } | null>
  | null
  | undefined;

export type MediaTrailerType =
  | {
      __typename: 'MediaTrailer';
      id?: string | null;
      site?: string | null;
      thumbnail?: string | null;
    }
  | null
  | undefined;

export type MediaDataType = {
  airing?: {
    __typename: 'AiringScheduleConnection';
    edges?: Array<{
      __typename: 'AiringScheduleEdge';
      node?: {
        __typename: 'AiringSchedule';
        airingAt: number;
        episode: number;
        timeUntilAiring: number;
      } | null;
    } | null> | null;
  } | null;
  format?: Types.MediaFormat | null;
  episodes?: number | null;
  duration?: number | null;
  status?: Types.MediaStatus | null;
  startDate?: {
    __typename: 'FuzzyDate';
    month?: number | null;
    day?: number | null;
    year?: number | null;
  } | null;
  endDate?: {
    __typename: 'FuzzyDate';
    month?: number | null;
    day?: number | null;
    year?: number | null;
  } | null;
  season?: Types.MediaSeason | null;
  seasonYear?: number | null;
  averageScore?: number | null;
  meanScore?: number | null;
  popularity?: number | null;
  favourites?: number | null;
  studios?: {
    __typename: 'StudioConnection';
    nodes?: Array<{ __typename: 'Studio'; id: number; name: string } | null> | null;
  } | null;
  source?: Types.MediaSource | null;
  hashtag?: string | null;
  genres?: Array<string | null> | null;
  title?: {
    __typename: 'MediaTitle';
    english?: string | null;
    romaji?: string | null;
    native?: string | null;
  } | null;
  synonyms?: Array<string | null> | null;
};
