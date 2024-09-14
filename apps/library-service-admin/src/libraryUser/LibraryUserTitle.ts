import { LibraryUser as TLibraryUser } from "../api/libraryUser/LibraryUser";

export const LIBRARYUSER_TITLE_FIELD = "firstName";

export const LibraryUserTitle = (record: TLibraryUser): string => {
  return record.firstName?.toString() || String(record.id);
};
