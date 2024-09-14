import { Author } from "../author/Author";
import { Category } from "../category/Category";

export type Book = {
  author?: Author | null;
  category?: Category | null;
  createdAt: Date;
  id: string;
  isbn: string | null;
  publishedDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
