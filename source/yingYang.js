import { Styles } from './styles/Style.js';
import { Db } from './db/db.js';
import { App } from './index.js';
import { Menu } from './components/menu.js';
import { lcScrol } from './anim/Locomotive Scroll/locomtion.js';
import { anim } from './anim/gsapf.js';

export function yingYangp() {
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
                                        tag: 'img',
                                        attribute: [
                                            { key: 'src', value: './src/assets/yingYang.jpg' },
                                            { key: 'class', value: 'absolute top-0 left-0 w-full h-full  z-0' }
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'text-center relative z-10 h-screen text-white w-full text-6xl sm:text-[150px] flex items-center justify-center flex-col' }
                                        ],
                                        html: [
                                            h1(`
                                                Ying Yang
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
                                                    h1('A Yin'),
                                                    h1('And a Yang')
                                                ]
                                            }),
                                            RenderElements({
                                                times: Db.yinYang.length,
                                                element: function (deltaCounter) {
                                                    return webx.createElement({
                                                        tag: 'span',
                                                        attribute: { key: 'class', value: 'font-extralight animtxt' },
                                                        html: `${Db.yinYang[deltaCounter]} `
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
                                                            h1('Do good Actions and due to'),
                                                            h1('the good actions your future'),
                                                            h1('would be better')
                                                        ]
                                                    }),
                                                    webx.createElement({
                                                        tag: 'div',
                                                        attribute: [
                                                            { key: 'class', value: 'text-xl sm:text-xl animtxt' }
                                                        ],
                                                        html: [
                                                            h1('Yin-Yang the representation of (karama) states if you maintian peace it will increase the life span of humanity as life and war are related', null, 'class', 'mb-3'),
                                                            h1('If you raise a voice to stop wars now in return in the future the species of humans could surivive.', null, 'class', 'mb-3'),
                                                            h1('Remeber a voice for Peace is a voice for the humanity and by the yin yang rule due to your efforts for fighting the peace the human species will have a chance to live', null, 'class', 'mb-3'),
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            window.innerWidth > 640 ? webx.createElement({
                                tag: "div",
                                attribute: [
                                    { key: 'class', value: 'bg-black text-white w-full sm:h-screen relative' },
                                    { key: 'id', value: 'p3' }
                                ],
                                html: [
                                    h1('THE YIN-YANG', null, 'class', 'text-[35vw] whitespace-nowrap')
                                ]
                            }) : p(''),
                            webx.createElement({
                                tag: 'div',
                                attribute: [
                                    { key:'class', value:'text-black p-20 w-full sm:h-[120vh] sm:grid sm:grid-cols-2 sm:grid-rows-2 gap-6 relative' },
                                    { key: 'id', value: 'p5' }
                                ],
                                html: [
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'relative rounded-xl overflow-hidden col-span-2 group video-container' }
                                        ], event: 'click',
                                        eventCode: function () {
                                            webx.Navigate({
                                                Page: App.warsp(),
                                                animate: false,
                                                OnNavigation: function () {
                                                    anim.wars();
                                                    lcScrol.scrollLocomotion();
                                                }
                                            })
                                        }, html: [
                                            webx.createElement({
                                                tag: 'video',
                                                attribute: [
                                                    { key: 'src', value: './src/assets/earth.mp4' },
                                                    { key: 'loop', value: true },
                                                    { key: 'muted', value: true },
                                                    { key: 'class', value: 'object-cover w-full h-full transition duration-300 blur-xl' }
                                                ]
                                            }),
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'absolute inset-0 flex items-end justify-between text-white z-10 pointer-events-none' }
                                                ],
                                                html: [
                                                    h1(`Yin Yang`, null, 'class', 'm-16 text-5xl sm:text-[48px]'),
                                                    h1(`the relation of life and war`, null, 'class', 'm-16 text-2xl sm:text-[28px]')
                                                ]
                                            })
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'relative rounded-xl overflow-hidden group video-container' }
                                        ], event: 'click',
                                        eventCode: function () {
                                            webx.Navigate({
                                                Page: App.warsp(),
                                                animate: false,
                                                OnNavigation: function () {
                                                    anim.wars();
                                                    lcScrol.scrollLocomotion();
                                                }
                                            })
                                        }, html: [
                                            webx.createElement({
                                                tag: 'video',
                                                attribute: [
                                                    { key: 'src', value: './src/assets/army.mp4' },
                                                    { key: 'loop', value: true },
                                                    { key: 'muted', value: true },
                                                    { key: 'class', value: 'object-cover w-full h-full transition duration-300 blur-xl' }
                                                ]
                                            }),
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none' }
                                                ],
                                                html: [
                                                    h1(`Effect of wars`, null, 'class', 'text-5xl sm:text-[48px]')
                                                ]
                                            })
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'relative rounded-xl overflow-hidden group video-container' }
                                        ], event: 'click',
                                        eventCode: function () {
                                            webx.Navigate({
                                                Page: App.peaceMindp(),
                                                animate: false,
                                                OnNavigation: function () {
                                                    anim.peaceOfMind()
                                                    lcScrol.scrollLocomotion();
                                                }
                                            })
                                        }, html: [
                                            webx.createElement({
                                                tag: 'video',
                                                attribute: [
                                                    { key: 'src', value: './src/assets/water.mp4' },
                                                    { key: 'loop', value: true },
                                                    { key: 'muted', value: true },
                                                    { key: 'class', value: 'object-cover w-full h-full transition duration-300 blur-xl' }
                                                ]
                                            }),
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'absolute inset-0 flex items-center justify-center text-white z-10 pointer-events-none' }
                                                ],
                                                html: [
                                                    h1(`YinYang & Inner Peace`, null, 'class', 'text-5xl sm:text-[48px]')
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
