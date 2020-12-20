export enum LoadingStatusEnum {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostMeta {
  loading: LoadingStatusEnum;
  error: null | string;
}
