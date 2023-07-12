export interface IPropsLogin {
  username: string;
  password: string;
}

export interface IPropsUserInfo {
  _id?: string;
  username: string;
  our_love_story: Array<IOurLoveStory>;
  share_love: IListBankInfo;
  countdown: IListCountdown;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IOurLoveStory {
  title: string;
  date: string;
  story: string;
}

export interface IBankInfo {
  logo?: string;
  rek_number: string;
  bank_name: string;
  name: string;
  no_tlpn?: string;
}

export interface IListBankInfo {
  list_bank: Array<IBankInfo>;
  send_gift_location: string;
}

export interface IListCountdown {
  desc: string;
  date: string;
  link_live_streaming: string;
  live_streaming_status: boolean;
  akad: IInfoAkad;
  resepsi: IInfoResepsi;
}

export interface IInfoAkad {
  location: string;
  location_name: string;
  location_link: string;
  date: string;
}

export interface IInfoResepsi {
  location: string;
  location_name: string;
  location_link: string;
  date: string;
}

export interface IFormShareLove {
  share_love: IListBankInfo;
}

export interface IFormLoveStory {
  our_love_story: Array<IOurLoveStory>;
}

export interface IFormCountdown {
  countdown: IListCountdown;
}
