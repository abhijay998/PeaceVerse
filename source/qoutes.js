import { Styles } from './styles/Style.js';
import { Db } from './db/db.js';
import { App } from './index.js';
import { Menu } from './components/menu.js';

export function Qoutes() {
    return (
        webx.CreateApp({
            isParentReq: false,
            home: Home({
                style: Styles.root,
                scaf: Scaf({
                    navBar: AppBar({
                        backgroundColor: 'a text-white backdrop-blur-none',
                        title: h1('Peace Verse', null, 'class', 'mx-4 text-xl sm:text-2xl'),
                        actions: [
                            webx.createElement({
                                tag: 'div',
                                html: [
                                    Button({
                                        type: 'text',
                                        attributes: [
                                            { key: 'class', value: 'text-white sm:mx-4 mx-2 border-white' }
                                        ],
                                        html: [
                                            h1('Join Us')
                                        ],
                                        eventC: function () {
                                            webx.Navigate({
                                                animate: false,
                                                Page: App.loginp(),
                                            });
                                        }
                                    }),
                                    Button({
                                        type: 'icon',
                                        attributes: [
                                            { key: 'id', value: 'menuBtn' }
                                        ],
                                        html: Icon({
                                            attributes: [
                                                { key: 'class', value: 'text-white' }
                                            ],
                                            Name: 'menu'
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    body: Body({
                        Content: [
                            Menu(),
                            webx.createElement({
                                tag: 'div',
                                attribute: [
                                    { key: 'class', value: 'text-black w-full h-screen relative' },
                                    { key: 'id', value: 'p1' }
                                ],
                                html: [
                                    webx.createElement({
                                        tag: 'video',
                                        attribute: [
                                            { key: 'src', value: './src/assets/wd.mp4' },
                                            { key: 'autoplay', value: true },
                                            { key: 'loop', value: true },
                                            { key: 'muted', value: true },
                                            { key: 'class', value: 'absolute top-0 left-0 w-full h-full object-cover z-0' }
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'text-center relative z-10 h-screen text-white w-full text-6xl sm:text-[150px] flex items-center justify-center flex-col' }
                                        ],
                                        html: [
                                            h1(`
                                                Qoutes
                                            `)
                                        ]
                                    })
                                ]
                            }),
                            webx.createElement({
                                tag: "div",
                                attribute: [
                                    { key: 'class', value: 'w-full text-white sm:h-screen relative p-16' },
                                    { key: 'id', value: 'p2' }
                                ],
                                html: [
                                    webx.createElement({
                                        tag: 'h1',
                                        attribute: { key: 'class', value: 'sm:text-4xl text-2xl' },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'my-8 text-lg sm:text-xl sm:flex sm:justify-between animtxt' }
                                                ],
                                                html: [
                                                    h1('Words'),
                                                    h1('of Wisdom')
                                                ]
                                            }),
                                            RenderElements({
                                                times: Db.textArr.length,
                                                element: function (deltaCounter) {
                                                    return webx.createElement({
                                                        tag: 'span',
                                                        attribute: { key: 'class', value: 'font-extralight animtxt' },
                                                        html: `${Db.textArr[deltaCounter]} `
                                                    });
                                                }
                                            }),
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: { key: 'class', value: 'my-16 sm:grid sm:grid-cols-2' },
                                                html: [
                                                    webx.createElement({
                                                        tag: 'div',
                                                        attribute: [
                                                            { key: 'class', value: 'mb-6 sm:m-[0px] animtxt' }
                                                        ],
                                                        html: [
                                                            h1('Stop the Wars! raise a voice'),
                                                            h1('Your Actions can change the future')
                                                        ]
                                                    }),
                                                    webx.createElement({
                                                        tag: 'div',
                                                        attribute: [
                                                            { key: 'class', value: 'text-xl sm:text-xl animtxt' }
                                                        ],
                                                        html: [
                                                            h1('"Peace can not be kept by force, it can be achieved only by understanding" - Albert Einstien', null, 'class', 'mb-3'),
                                                            h1('"Do not let the behaviour in others destroy your inner peace." - Dalai lama', null, 'class', 'mb-3'),
                                                            h1('"Peace comes from within. Do not seek it without" - Buddha', null, 'class', 'mb-3'),
                                                            h1('"Peace begins with a smile" - mother terisa', null, 'class', 'mb-3'),
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }), webx.createElement({
                                tag: 'div',
                                attribute: [
                                    { key: 'class', value: 'w-full sm:h-screen relative' },
                                    { key: 'id', value: 'p5' }
                                ], html: [
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'id', value: 'move' },
                                            { key:'class', value:'flex bg-white p-6 shrink-[0] gap-4' }
                                        ], html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque py-6 bg-white flex items-center text-black text-2xl' }
                                                ], html: [
                                                    h1('FIGHT FOR PEACE - SAVE THE WORLD! ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }),
                                        ]
                                    }), webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'id', value: 'move2' },
                                            { key:'class', value:'flex bg-black p-6 shrink-[0] gap-4' }
                                        ], html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:'marque2 py-6 bg-black flex items-center text-white text-2xl' }
                                                ], html: [
                                                    h1('MAINTAIN HARMONY ', null, 'class', 'whitespace-nowrap')
                                                ]
                                            }), 
                                        ]
                                    }), window.innerWidth > 648?webx.createElement({
                                        tag: 'div',
                                        attribute: { key: 'class', value:'p-16' },
                                        html: [
                                            h1("<span>Peace</span> <span>Verse</span>", null, "class", 'text-[13vw] my-4'),
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key:'class', value:"flex justify-between items-center px-4" }
                                                ], html: [
                                                    p('Trying to bring peace in this world agian everyday.'),
                                                    webx.createElement({
                                                        tag: 'div',
                                                        html: [
                                                            Button({
                                                                type: 'filled',
                                                                attributes: [{ key:'class', value: 'rounded-lg mx-6' }],
                                                                html: [ h1('Join Us') ],
                                                                eventC: function () {
                                                                    webx.Navigate({
                                                                        animate: false,
                                                                        Page: App.loginp(), 
                                                                    });
                                                                }
                                                            }), Button({
                                                                type: 'text',
                                                                attributes: [{ key:'class', value: 'rounded-lg' }],
                                                                html: [ h1('Contact Us') ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }):p('')
                                ]
                            })              
                        ]
                    })
                })
            })
        })
    );
}
