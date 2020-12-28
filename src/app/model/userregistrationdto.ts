export class UserRegistrationDTO {
  constructor(
    public username: string,
    public password: string,
    public name: string,
    public surname: string,
    public phoneNumber: string,
    public account: number
  ) {
  }
}
