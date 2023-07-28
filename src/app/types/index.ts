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
