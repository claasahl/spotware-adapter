export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: (...args: any[]) => void) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: (...args: any[]) => void) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};
