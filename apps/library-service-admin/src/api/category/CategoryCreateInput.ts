import { BookCreateNestedManyWithoutCategoriesInput } from "./BookCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  books?: BookCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
};
