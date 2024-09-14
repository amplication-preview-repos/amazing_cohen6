import { BookUpdateManyWithoutAuthorsInput } from "./BookUpdateManyWithoutAuthorsInput";

export type AuthorUpdateInput = {
  biography?: string | null;
  books?: BookUpdateManyWithoutAuthorsInput;
  name?: string | null;
};
