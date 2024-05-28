// types.ts

import { Listing, Reservation, User } from "@prisma/client";

// SafeListing type with stringified createdAt
export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

// SafeReservation type based on Reservation entity
export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

// SafeUser type with stringified dates
export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
