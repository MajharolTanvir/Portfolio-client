export interface IMeta {
  limit?: number;
  page?: number;
  total?: number;
}

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type ResponseErrorType = {
  statusCode: number;
  message?: string;
  errorMessages?: IGenericErrorMessage[];
};

type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type UserInfoProps = {
  userId?: string;
  userEmail?: string;
  role?: string | undefined;
};

export type ISkills = {
  id?: string;
  name?: string;
  imageUrl?: string;
  experiencedPercentage?: string;
  prefix?: string;
  serialId?: number;
  categoryId?: string;
};
