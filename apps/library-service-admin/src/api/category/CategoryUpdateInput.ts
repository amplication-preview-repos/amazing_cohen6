import { BookUpdateManyWithoutCategoriesInput } from "./BookUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  books?: BookUpdateManyWithoutCategoriesInput;
  name?: string | null;
};
