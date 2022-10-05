import m from 'mithril';
import Authentication from '../services/Auth';

const ModalCloseButtonComponent = {
    view: () =>
        m('.flex.justify-end.mb-6', [
            m('button',
                {
                onclick() { m.route.set('/') },
                },
                m('span.mr-2', "Close"),
                m('span.i.fa.fa-times'))
            ])
}


const LoginFormComponent = {
        
    view: function (_vnode) {
        return m('form', {
            onsubmit: async function (e) {
                const Auth = new Authentication();
                const form = new FormData(e.target);

                const res = await Auth.post(e, form.get('email'), form.get('password'));

                if (res)
                    m.route.set('/');
            }
        }, [
                m('div', {
                    'class': 'mb-4'
                }, [
                    m('label', {
                        'class': 'block text-sm font-bold mb-2',
                        'for': 'email',
                    }, "Email address"),
                    m('input', {
                        'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker',
                        'id': 'email',
                        'type': 'text',
                        'placeholder': 'palpatine@naboo.net',
                    })
                ]),
                m('div', {
                    'class': 'mb-6',
                }, [
                    m('label', {
                        'class': 'block text-sm font-bold mb-2',
                        'for': 'Password'
                    }, "Password"),
                    m('input', {
                        'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3',
                        'id': 'password',
                        'type': 'password',
                        'placeholder': '*******'
                    })
                ]),
                m('div',
                        m('button', {
                            'class': 'bg-green hover:bg-purpe-dark text-white font-bold py-2 px-4' +
                                ' rounded border-b-4 border-purple-darkest',
                            'type': 'submit',
                        }, "Sign in")
                    )/*, [
                    m('div',
                        m('button', {
                            'class': 'bg-green hover:bg-purpe-dark text-white font-bold py-2 px-4' +
                                ' rounded border-b-4 border-purple-darkest',
                            'type': 'button',
                        }, "Sign in")
                    ),
                    m('div', {
                        'class': 'mt-4 md:mt-0',
                    },
                        m('a', {
                            'class': 'text-purple no-underline',
                            'href': '#'
                        }, "Forgot your password ?")
                    )
                ])*/
            ])
    }
}


const LoginModalComponent = {
    view: function (_vnode) {

        return m('div', {
            'class': 'fixed pin flex items-center',
        }, [
            m('div', {
                'class': 'fixed pin bg-black opacity-75 z-10',
            }),
            m('div', {
                'class': 'relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8',
            },
                m('div', {
                    'class': 'shadow-lg bg-white rounded-lg p-8',
                }, [
                    m(ModalCloseButtonComponent),
                    m('h1', {
                        'class': 'text-center text-2xl text-purple-dark',
                    }, "Login"),
                    m(LoginFormComponent),
                ])
            )
        ]);
    }
}

export default LoginModalComponent;
