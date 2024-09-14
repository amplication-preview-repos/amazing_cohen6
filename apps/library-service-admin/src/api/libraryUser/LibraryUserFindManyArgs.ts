import { LibraryUserWhereInput } from "./LibraryUserWhereInput";
import { LibraryUserOrderByInput } from "./LibraryUserOrderByInput";

export type LibraryUserFindManyArgs = {
  where?: LibraryUserWhereInput;
  orderBy?: Array<LibraryUserOrderByInput>;
  skip?: number;
  take?: number;
};
