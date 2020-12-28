export class AuthResponseDTO {
  constructor(
    public jwt: string,
    public role: string,
    public id: number
  ) {
  }
}
