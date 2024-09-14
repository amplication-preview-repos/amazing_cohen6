import { BookCreateNestedManyWithoutAuthorsInput } from "./BookCreateNestedManyWithoutAuthorsInput";

export type AuthorCreateInput = {
  biography?: string | null;
  books?: BookCreateNestedManyWithoutAuthorsInput;
  name?: string | null;
};
