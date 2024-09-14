import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  books?: BookListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
