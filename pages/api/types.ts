export type PostResponseType = {
  id: number;
  title: string;
  body: string;
};

export type GetResponseType<T> = {
  content: T[];
};

// export type GetPostResponseType = PostResponseType[];
