export interface IPropsLogin {
  username: string;
  password: string;
}

export interface IPropsUserInfo {
  _id?: string;
  username: string;
  our_love_story: Array<IOurLoveStory>;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IOurLoveStory {
  title: string;
  date: string;
  story: string;
}

export interface IFormLoveStory {
  our_love_story: Array<IOurLoveStory>;
}
