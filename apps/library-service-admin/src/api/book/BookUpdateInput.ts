import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type BookUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  category?: CategoryWhereUniqueInput | null;
  isbn?: string | null;
  publishedDate?: Date | null;
  title?: string | null;
};
