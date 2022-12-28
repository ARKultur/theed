import m from 'mithril';
import TopbarComponent from "../components/Bars/Topbar";
import FooterComponent from "../components/FooterComponent";

const ProjectView = {
    view: function (_vnode) {
        return m('root', [
            m(TopbarComponent),
            m('section', {
                'class': 'bg-white dark:bg-gray-900',
            }, [
                m('div', {
                        'class': 'max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:pt-28'
                    },
                    [
                        m('div', {
                                'class': 'mb-8'
                            },
                            m('h1', {
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "ARKultur"),
                            m('p', {
                                'class': 'max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                            }, "ARKultur is a project made by 8 student from Epitech as a part of Epitech Innovative Project (EIP), our project graduation.")
                        ),
                        m('div', {
                                'class': 'mb-8'
                            },
                            m('h1', {
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Constat"),
                            m('p', {
                                'class': 'max-w-5xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                            }, "The idea of the project emerges juste after the third wave of Covid-19 in 2021. The impact was hard for every one, and mostly for the culture. " +
                                "Visiting a place can be annoying for children, information may not be easy to read for people with disabilities, or just missing. " +
                                "Without theses information we loose our history. It's a big issue and we have to change it."),
                            m('img', {
                                'class': 'inline-block mx-4 mt-5',
                                'src': 'public/images/Normandie.jpg',
                                'alt': 'Normandie\'s photo'
                            })
                        ),
                        m('div', {
                                'class': 'mb-8'
                            },
                            m('h1', {
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Solution"),
                            m('p', {
                                'class': 'max-w-5xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                            }, "ARKultur is here to change how we visit a place! With our mobile application can can have an access to all available data of a museum. " +
                                "You can see in a map all cultural place around you and discover something you never notice. Several guide are available for everyone. " +
                                "A treasure hunter or a more classical guide there's something for everyone. You can also find an Augmented Reality (AR) view of the " +
                                "place to help you to catch every information even if they are physically inaccessible."),
                            m('img', {
                                'class': 'inline-block mx-4 mt-5',
                                'src': 'public/images/colline-fourviere-lyon.jpg',
                                'alt': 'Fourvière\'s photo'
                            })
                        ),
                        m('div', {
                                'class': 'mb-8 max-w-5xl'
                            },
                            m('h1', {
                                'class': 'items-center max-w-2xl mb-4 text-4xl font-extrabold leading-none  tracking-tight md:text-5xl xl:text-6xl dark:text-white'
                            }, "Epitech"),
                            m('p', {
                                'class': 'font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400 mb-3'
                            }, "Epitech is a school in 5 years, and one in a foreign country, specialized in computer science. On our 3th year we start our EIP (Epitech Innovative Project) " +
                                "which will last 3 years. The goal of this project is to create a real project and manage him like a project in a company. We have to be innovative and creative " +
                                "to create a project that bring something new in our world."),
                            m('img', {
                                'class': 'inline-block mx-4 mt-5',
                                'src': 'public/images/Campus_Lyon.jpg',
                                'alt': 'Epitech\'s photo'
                            })
                        ),
                    ]
                )
                ]
            ),
            m(FooterComponent)
        ])
    }
}

export default ProjectView;
