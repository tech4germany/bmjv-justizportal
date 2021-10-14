export class UserState {
  public currentNode: string = '';
  public stack: string[] = [];
  public vars: { [id: string]: string } = {};
}
