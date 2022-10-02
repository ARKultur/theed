import m from 'mithril';
import LoginModalComponent from '../modals/LoginModal';

const LoginView = {
    view: function (_vnode) {
        return m(LoginModalComponent)
    }
}

export default LoginView;
