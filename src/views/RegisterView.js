import m from 'mithril';
import RegisterModalComponent from '../modals/RegisterModal';

const RegisterView = {
    view: function (_vnode) {
        return m(RegisterModalComponent)
    }
}

export default RegisterView;
