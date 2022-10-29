export interface ResponseError extends Error {
  statusCode?: number;
  statusMessage?: string;
}
