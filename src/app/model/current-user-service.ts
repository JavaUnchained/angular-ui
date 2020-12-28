export class CurrentUserService {
  id: number;

  setCurrentId(id: number): void {
    this.id = id;
  }

  getCurrentId(): number {
    const temp = this.id;
    // this.id = undefined;
    return temp;
  }
}
