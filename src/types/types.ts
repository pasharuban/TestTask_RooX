export type ButtonElementTypes = {
  height?: string;
  width?: string;
  typeOfButton: string;
  disabled?: boolean;
  marginTop?: string;
};

export type UserCardTypes = {
  name: string;
  companyName: string;
  city: string;
  id: string;
};

export type UserCardRowTypes = {
  title: string;
  titleValue: string;
};

export type UserDataType = {
  id: string;
  name: string;
  address: Record<string, string>;
  company: Record<string, string>;
  phone?: string;
  username?: string;
  website?: string;
  email?: string;
};

export type ActionTypes = {
  type: string;
  payload?: any;
};

export type InputElementTypes = {
  label: string;
  value: string;
  name: string;
  type?: string;
  disabled: boolean;
  required: boolean;
};
