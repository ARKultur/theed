import m from 'mithril';
import {WEBSITE_URL} from '../constants/url';

const ModalCloseButtonComponent = {
    view: function (_vnode) {
        return m('div', {
            'class': 'flex justify-end mb-6',
        }, m('button', {
            'href': `${WEBSITE_URL}/`
        },
            [
                m('span', {
                    'class': 'mr-2',
                }, "Close"),
                m('span',
                    m('i', {
                        'class': 'fa fa-times'
                    })
                )
            ]
        ))
    }
}


const LoginFormComponent = {
    view: function (_vnode) {
        return m('form', {
            'class': 'pt-6 pb-2 my-2',
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
            m('div', {
                'class': 'block md:flex items-center justify-between',
            }, [
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
            ])
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
