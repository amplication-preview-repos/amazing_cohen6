import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BookListRelationFilter } from "../book/BookListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type AuthorWhereInput = {
  biography?: StringNullableFilter;
  books?: BookListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
