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
