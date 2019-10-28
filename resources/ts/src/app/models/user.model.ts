export interface IUser {
  company: string;
  email: string;
  firstname: string;
  lastname: string;
  type: string;
}

export class User implements IUser {
  type: string;
  company: string;
  email: string;
  firstname: string;
  lastname: string;

  constructor(fromUser: IUser) {
    this.company = fromUser.company;
    this.email = fromUser.email;
    this.firstname = fromUser.firstname;
    this.lastname = fromUser.lastname;
  }

  static get storedUser(): User {
    const user = new User(JSON.parse(atob(localStorage.getItem(User.storeKey))));
    return user;
  }

  private static get storeKey() {
    return btoa('userStorageKey');
  }

  storeToStorage() {
    localStorage.setItem(User.storeKey, btoa(JSON.stringify(this)));
  }
}
