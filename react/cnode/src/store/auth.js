import { observable, action } from 'mobx'

class Auth {
    @observable
    isLogin = true;

    @action
    Login() {
        this.isLogin = true;
    }
    Logout() {
        this.isLogin = false;
    }
}

export default new Auth();