export interface ProductCheck {
  pid: string;
  quantity: number;
}

export interface ProductCheckResponse {
  isError: boolean;
  success: boolean;
  message: string;
  errorType: ProductCheckErrorType;
}

export type ProductCheckErrorType =
  | "INCORRECT_BODY"
  | "INCORRECT_TYPE"
  | "MISSING_PROPERTY"
  | "NOT_FOUND"
  | "INCORRECT_QUANTITY";
