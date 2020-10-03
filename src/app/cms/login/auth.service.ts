export class AuthService {
    loggedIn = false;

    isAuthenticated() {
        const promise = new Promise (
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 100);
            }
        );
        return promise
    }

    login() {
        this.loggedIn = true;
    }

    loggedOut() {
        this.loggedIn = false
    }
}