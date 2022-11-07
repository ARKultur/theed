import m from 'mithril';
import Authentication from '../services/Auth';

let authResponse = {
    isValid: true,
    code: -1,
    body: {}
};
let wrong_pass = false;

let formData = {
    name: null,
    password: null,
    conf_password: null,
    email: null
}

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


const RegisterFormComponent = {

    view: function (_vnode) {
        return m('form', {
            onsubmit: async function (e) {
                const Auth = new Authentication();
                wrong_pass = false;

                if (formData.password.localeCompare(formData.conf_password) !== 0) {
                    e.preventDefault();
                    wrong_pass = true;
                } else {
                    authResponse = await Auth.new(e, formData.email, formData.password, formData.name);
                    if (authResponse.isValid)
                        m.route.set("/login");
                }
            }
        }, [
            m('div', {
                'class': 'mb-6'
            }, [
                m('label', {
                    'class': 'block text-sm font-bold mb-2',
                    'for': 'name',
                }, "Name"),
                m('input', {
                    'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker',
                    'id': 'name',
                    'type': 'text',
                    'placeholder': 'Palpatine',
                    oninput: function (e) {
                        formData.name = e.target.value;
                    }
                })
            ]),
            m('div', {
                'class': 'mb-6'
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
                    oninput: function (e) {
                        formData.email = e.target.value;
                    }
                })
            ]),
            m('div', {
                'class': 'mb-2',
            }, [
                m('label', {
                    'class': 'block text-sm font-bold mb-2',
                    'for': 'Password'
                }, "Password"),
                m('input', {
                    'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3',
                    'id': 'password',
                    'type': 'password',
                    'placeholder': '*******',
                    oninput: function (e) {
                        formData.password = e.target.value;
                    }
                }),
                m('label', {
                    'class': 'block text-sm font-bold mb-2',
                    'for': 'Confirm Password'
                }, "Confirm_Password"),
                m('input', {
                    'class': 'shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3',
                    'id': 'conf_password',
                    'type': 'password',
                    'placeholder': '*******',
                    oninput: function (e) {
                        formData.conf_password = e.target.value;
                    }
                })
            ]),
            m('div',
                m('button', {
                    'class': 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 \
                           focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 \
                           py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600  \
                           dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800\','
                }, "Sign in")
            )
            ])
    }
}

const CriticAlert = {
    view: function (_vnode) {
        return m("div", {
            "class": "mb-6",
            "role": "alert",
        }, [
          m("div", {
              "class": "bg-red-500 text-white font-bold rounded-t px-4 py-2"
          }, "Error"),
          m("div", {
              "class": "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
          }, [
              authResponse.code !== 403 ? "An error has occurred. Please try again." :
              authResponse.body.map(function (error) {
                  return m("div", [
                      m("p", {
                          "class": "font-bold"
                      }, error.field.charAt(0).toUpperCase() + error.field.slice(1) + ":"),
                      m("p", error.detail.charAt(0).toUpperCase() + error.detail.slice(1))
                  ])
              }),
          ]),
          ]
        )

    }
}

const PassAlert = {
    view: function (_vnode) {
        return m("div", {
              "class": "mb-6",
              "role": "alert",
          }, [
              m("div", {
                  "class": "bg-red-500 text-white font-bold rounded-t px-4 py-2"
              }, "Information Error"),
              m("div", {
                  "class": "border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700"
              }, "Passwords does not match!"),
          ]
        )

    }
}


const RegisterModalComponent = {
    view: function (_vnode) {

        return m('div', {
            'class': 'pin flex items-center',
        }, [
            m('div', {
                'class': 'fixed pin bg-black opacity-75 z-10',
            }),
            m('div', {
                'class': 'relative mx-6 md:mx-auto w-full md:w-1/2 lg:w-1/3 z-20 m-8',
            }, [
                authResponse.isValid ? null : m(CriticAlert),
                wrong_pass ? m(PassAlert) : null,
                m('div', {
                      'class': 'shadow-lg bg-white rounded-lg p-8',
                  }, [
                      m(ModalCloseButtonComponent),
                      m('h1', {
                          'class': 'text-center text-2xl text-purple-dark',
                      }, "New account"),
                      m(RegisterFormComponent),
                  ])
            ])
        ]);
    }
}

export default RegisterModalComponent;
