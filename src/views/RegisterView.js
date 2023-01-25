import m from 'mithril';
import RegisterModalComponent from '../modals/RegisterModal';

const RegisterView = {
    view: function (_vnode) {
        document.title = "ARKultur - Register";
        return m(RegisterModalComponent)
    }
}

export default RegisterView;
