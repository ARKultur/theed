import m from 'mithril';
import LoginModalComponent from '../modals/LoginModal';

const LoginView = {
    view: function (_vnode) {
        document.title = "ARKultur - Login";
        return m(LoginModalComponent)
    }
}

export default LoginView;
