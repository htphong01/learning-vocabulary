export class ApiError extends Error {
  constructor(private statusCode: number, private statusMessage: string) {
    super(statusMessage);
  }
}
