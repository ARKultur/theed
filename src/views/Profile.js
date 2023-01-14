import m from 'mithril';
import TopbarComponent from "../components/Bars/Topbar";
import FooterComponent from "../components/FooterComponent";

const Field = {
    view: function (vnode) {
        return (
            m('form', {
                    'class': 'mb-4 flex flex-row',
                    onsubmit: async function(e) {
                        const form = new FormData(e.target);

                        e.preventDefault();
                        console.log('value: ' + form.get(vnode.attrs.id));
                        localStorage.setItem(`${vnode.attrs.id}`, form.get(vnode.attrs.id))
                    }
                },
                [
                    m('div', {
                            'class': 'w-2/5'
                        },
                        [
                            m('p', {
                                'class': 'items-center max-w-2xl mb-4 text-2xl font-extrabold leading-none  tracking-tight md:text-xl xl:text-xl dark:text-white',
                            }, `${vnode.attrs.fieldName}`)
                        ]
                    ),
                    m('div', {
                            'class': 'w-2/5'
                        },
                        [
                            m('label', {
                                    'class': "sr-only",
                                    for: `${vnode.attrs.id}`
                            }, `${vnode.attrs.fieldName}`),
                            m('input', {
                                type: `${vnode.attrs.type}`,
                                placeholder: `${vnode.attrs.placeholder}`,
                                id: `${vnode.attrs.id}`,
                                name: `${vnode.attrs.id}`
                            })
                        ]
                    ),
                    m('div', {
                            'class': 'w-1/5'
                        },
                        [
                            m('button', {
                                'class': 'text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 \
                                                                focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 \
                                                                py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600  \
                                                                dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800\',',
                                type: 'submit'
                            }, "Edit")
                        ]
                    )
                ]
            )
        )
    }
}

const DataDisplayer = {
    view: function (vnode) {
        document.title = "ARKultur - Profile";
        return (
            m('div', {
                    'class': 'mb-4 flex flex-row',
                },
                [
                    m('div', {
                            'class': 'w-2/5'
                        },
                        [
                            m('p', {
                                'class': 'items-center max-w-2xl mb-4 text-2xl font-extrabold leading-none  tracking-tight md:text-xl xl:text-xl dark:text-white',
                            }, `${vnode.attrs.dataName}`)
                        ]
                    ),
                    m('div', {
                            'class': 'w-2/5'
                        },
                        [
                            m('p', {
                                'class': 'items-center max-w-2xl mb-4 text-2xl font-extrabold leading-none  tracking-tight md:text-xl xl:text-xl dark:text-white'
                            }, vnode.attrs.text)
                        ]
                    )
                ]
            )
        )
    }
}

const ProfileView = {
    view: function (_vnode) {
        document.title = "Your Profile";
        return m('root',
            [
                m(TopbarComponent),
                m('section', {
                    'class': 'bg-white dark:bg-gray-900',
                },
                    [
                        m('div', {
                            'class': 'max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28'
                        },
                            [
                                m('div', {
                                        'class': 'mb-8'
                                    },
                                    [
                                        m('h1', {
                                            'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                                        }, "Account Settings"),
                                        m('p', {
                                            'class': 'max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                                        }, "View and edit your information")
                                    ]
                                ),
                                m(Field, {
                                    fieldName: 'Email',
                                    type: 'email',
                                    placeholder: localStorage.getItem("account-email"),
                                    id: 'account-email',
                                }),
                                m(Field, {
                                    fieldName: 'Name',
                                    type: 'text',
                                    placeholder: localStorage.getItem("account-name"),
                                    id: 'account-name',
                                }),
                                m(Field, {
                                    fieldName: 'Password',
                                    type: 'password',
                                    id: 'account-password',
                                    placeholder: 'password'
                                }),
                                m(DataDisplayer, {
                                    dataName: 'Admin',
                                    text: localStorage.getItem("account-admin") === 'true' ? "Yes" : "No",
                                }),
                                m(DataDisplayer, {
                                    dataName: 'Organization',
                                    text: localStorage.getItem("account-organization")
                                })
                            ]
                        )
                    ]
                ),
                m(FooterComponent)
            ]
        )
    }
}

export default ProfileView;
