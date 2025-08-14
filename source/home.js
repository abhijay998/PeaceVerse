import { Handler } from "../lib/htmlHandler.js";
import { Styles } from './styles/Style.js';
import { Db } from './db/db.js';
import { App } from './index.js';
import { Menu } from './components/menu.js';
import { anim } from "./anim/gsapf.js";
import { lcScrol } from "./anim/Locomotive Scroll/locomtion.js";

export function Homep() {
    const main = () => {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'main');
        wrapper.setAttribute('class', 'relative');
        wrapper.innerHTML = Handler.Renderer.svg();
        return wrapper;
    }; return (
        webx.CreateApp({
            isParentReq: false,
            home: Home({
                style: `${Styles.root} ${Handler.Renderer.config({ sys: true, objOut: true, rend: true })}`,
                scaf: Scaf({
                    navBar: AppBar({
                        backgroundColor: 'a text-white backdrop-blur-none', //  yin yang
                        title: h1('Peace Verse', null, 'class', 'mx-4 text-xl sm:text-2xl'),
                        actions: [
                            webx.createElement({
                                tag: 'div',
                                html: [
                                    Button({
                                        type: 'text',
                                        attributes: [
                                            { key: 'class', value: 'text-white sm:mx-4 mx-2 border-white' }
                                        ], html: [
                                            h1('Join Us')
                                        ], eventC: function () {
                                            webx.Navigate({
                                                animate: false,
                                                Page: App.loginp(), 
                                            });
                                        }
                                    }), Button({
                                        type: 'icon',
                                        attributes: [{
                                            key: 'id',
                                            value: 'menuBtn'
                                        }],
                                        html: Icon({
                                            attributes: [
                                                { key:'class', value:'text-white' }
                                            ], Name: 'menu'
                                        })
                                    })
                                ]
                            })
                        ]
                    }), body: Body({
                        Content: [
                            Menu(),
                            main(),
                            webx.createElement({
                                tag: "div",
                                attribute: [
                                    { key:'class', value:'w-full relative sm:h-screen p-16' },
                                    { key: 'style', value: 'page-break-before: always;' },
                                    { key: 'id', value: 'p2' }
                                ], html: [
                                    webx.createElement({
                                        tag: 'h1',
                                        attribute: { key:'class', value: 'sm:text-4xl text-2xl' },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'my-8 text-lg sm:text-xl sm:flex sm:justify-between animtxt' }
                                                ], html: [
                                                    h1('Stop! Wars'),
                                                    h1('Do good get good')
                                                ]
                                            }), RenderElements({
                                                times: Db.textArr.length,
                                                element: function (deltaCounter) {
                                                    return webx.createElement({
                                                        tag:'span',
                                                        attribute: { key: 'class', value: 'font-extralight animtxt' },
                                                        html: `${Db.textArr[deltaCounter]} `
                                                    })
                                                }
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: { key:'class', value:'my-16 sm:grid sm:grid-cols-2' },
                                                html: [
                                                    webx.createElement({
                                                        tag: 'div',
                                                        attribute: [{
                                                            key: 'class',
                                                            value: 'mb-6 sm:m-[0px] animtxt'
                                                        }], html: [
                                                            h1('Stop the Wars! raise a voice'),
                                                            h1('Your Actions can change the future'),
                                                        ]
                                                    }), webx.createElement({
                                                        tag: 'div',
                                                        attribute: [{
                                                            key: 'class',
                                                            value: 'text-xl sm:text-xl animtxt'
                                                        }], html: [
                                                            h1('Your voice can change the world stop wars so, humanity can live long.', null, 'class', 'mb-3'),
                                                            h1('Voice for Peace is the most powerfull thing in the world as, it stops even the most distructive wars.', null, 'class', 'mb-3'),
                                                            h1('Peace is the only attribute with the ability to save lives.', null, 'class', 'mb-3'),
                                                            button('Learn More', null, function () {
                                                                webx.Navigate({
                                                                    animate: false,
                                                                    Page: App.goalsp(), 
                                                                    OnNavigation: function () {
                                                                        anim.animGoals();
                                                                        lcScrol.scrollLocomotion();
                                                                    }
                                                                });
                                                            }, 'class', 'text-blue-300 hover:text-blue-500 font-thin')
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }), window.innerWidth > 640?webx.createElement({
                                tag: "div",
                                attribute: [
                                    { key:'class', value:'bg-black text-white w-full px-12 relative' },
                                    { key: 'id', value: 'p3' }
                                ], html: [
                                    h1('☮︎ Peace', null, 'class', 'text-[20vw] whitespace-nowrap')
                                ]
                            }):p(''), webx.createElement({
                                tag: 'div',
                                attribute: [
                                    { key: 'class', value: 'bg-black text-white w-full sm:grid sm:grid-cols-2 gap-4 p-16' },
                                    { key: 'id', value: 'p4' }
                                ], html: [
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'group relative rounded-xl overflow-hidden sm:col-span-2 h-[300px] sm:h-[400px] cursor-pointer' }
                                        ], event: 'click', eventCode: function () {
                                            webx.Navigate({
                                                animate: false,
                                                Page: App.warsp(), 
                                                OnNavigation: function () {
                                                    anim.wars();
                                                    lcScrol.scrollLocomotion();
                                                }
                                            });
                                        },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'bg-cover bg-center absolute inset-0 pointer-events-none' },
                                                    { key: 'style', value: 'background-image: url(./src/assets/wars.webp);' }
                                                ],
                                            }), 
                                            webx.createElement({
                                                tag:'div',
                                                attribute: { 
                                                    key:'class', 
                                                    value:'absolute inset-0 flex items-center justify-center' 
                                                }, html: [ h1('Wars', null, 'class', 'relative z-10 text-4xl sm:text-6xl'), ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: `pointer-element absolute w-16 h-16 bg-white text-black flex items-center justify-center rounded-lg opacity-0 z-20 pointer-events-none`}
                                                ],
                                                html: 'open'
                                            })
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'group rounded-xl relative overflow-hidden h-[300px] cursor-pointer' }
                                        ], event: 'click',
                                        eventCode: function () {
                                            webx.Navigate({
                                                animate: false,
                                                Page: App.peaceMindp(), 
                                                OnNavigation: function () {
                                                    anim.peaceOfMind()
                                                    lcScrol.scrollLocomotion();
                                                }
                                            });
                                        },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'bg-cover bg-center absolute inset-0 pointer-events-none' },
                                                    { key: 'style', value: 'background-image: url(src/assets/peaceOfMind.webp);' }
                                                ]
                                            }),
                                            webx.createElement({
                                                tag:'div',
                                                attribute: { 
                                                    key:'class', 
                                                    value:'absolute inset-0 flex items-center justify-center' 
                                                }, html: [ h1('Peace of Mind', null, 'class', 'relative z-10 text-4xl sm:text-6xl') ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: `pointer-element absolute w-16 h-16 bg-white text-black flex items-center justify-center rounded-lg opacity-0 z-20 pointer-events-none`}
                                                ],
                                                html: 'open'
                                            })
                                        ]
                                    }),
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'group rounded-xl relative overflow-hidden h-[300px] cursor-pointer' }
                                        ], event: 'click',
                                        eventCode: function () {
                                            webx.Navigate({
                                                animate: false,
                                                Page: App.qoutesp(), 
                                                OnNavigation: function () {
                                                    anim.animqoutes();
                                                    lcScrol.scrollLocomotion();
                                                }
                                            });
                                        },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'bg-cover bg-center absolute inset-0 pointer-events-none' },
                                                    { key: 'style', value: 'background-image: url(./src/assets/peace.webp);' }
                                                ]
                                            }),
                                            webx.createElement({
                                                tag:'div',
                                                attribute: { 
                                                    key:'class', 
                                                    value:'absolute inset-0 flex items-center justify-center' 
                                                }, html: [ h1('Quotes', null, 'class', 'relative z-10 text-4xl sm:text-6xl'), ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: `pointer-element absolute w-16 h-16 bg-white text-black flex items-center justify-center rounded-lg opacity-0 z-20 pointer-events-none`}
                                                ],
                                                html: 'open'
                                            })
                                        ]
                                    })
                                ]
                            }), webx.createElement({
                                tag: "div",
                                attribute: [
                                    { key: 'class', value: 'w-full text-white sm:h-screen relative p-16' },
                                    { key: 'id', value: 'p4' }
                                ],
                                html: [
                                    webx.createElement({
                                        tag: 'h1',
                                        attribute: { key: 'class', value: 'sm:text-4xl text-2xl' },
                                        html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'my-8 text-lg sm:text-xl sm:flex sm:justify-between animtxt2' }
                                                ],
                                                html: [
                                                    h1('We fight'),
                                                    h1('for Peace')
                                                ]
                                            }),
                                            RenderElements({
                                                times: Db.textArr2.length,
                                                element: function (deltaCounter) {
                                                    return webx.createElement({
                                                        tag: 'span',
                                                        attribute: { key: 'class', value: 'font-extralight animtxt2' },
                                                        html: `${Db.textArr2[deltaCounter]} `
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
                                                            { key: 'class', value: 'mb-6 sm:m-[0px] animtxt2' }
                                                        ],
                                                        html: [
                                                            h1('Stop the Wars! raise a voice'),
                                                            h1('Your Actions can change the future')
                                                        ]
                                                    }),
                                                    webx.createElement({
                                                        tag: 'div',
                                                        attribute: [
                                                            { key: 'class', value: 'text-xl sm:text-xl animtxt2' }
                                                        ],
                                                        html: [
                                                            h1('When we fight for peace we feel proud (the only thing to fight for which no one will stop you)', null, 'class', 'mb-3'),
                                                            h1('When you raise your voice for peace the words which have the ability to change the future of the humanity', null, 'class', 'mb-3'),
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
                            }),                                                                         
                        ]
                    })
                })
            })
        })
    )
}