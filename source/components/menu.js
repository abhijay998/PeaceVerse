import { App } from '../index.js'
import { anim } from '../anim/gsapf.js';
import { lcScrol } from '../anim/Locomotive Scroll/locomtion.js';
import { Handler } from '../../lib/htmlHandler.js';

export function Menu() {
    return (
        webx.createElement({
            tag: 'div',
            attribute: [
                { key: 'id', value: 'menu' },
                { 
                    key: 'class', 
                    value: ` 
                        backdrop-blur-xl p-16
                        text-3xl sm:text-6xl fixed left-[-100%] w-full h-screen
                        z-[${Handler.HardCoded.LargeNum.HashMap.Set.valN()}]
                    ` 
                }
            ], html: [
                webx.createElement({
                    tag: 'div',
                    attribute: [
                        { key: 'class', value: 'w-full flex justify-between my-6' }
                    ], html: [
                        h1('Menu', null, 'class', 'text-white'),
                        h1('X', null, 'class', 'hover:text-black cursor-pointer menuX')
                    ]
                }), 
                button('Home', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.homep(), 
                        OnNavigation: function () {
                            Handler.RendererAccountHandler.Inspection.Animation.Render();
                            anim.animationH();
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),

                button('Goals', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.goalsp(), 
                        OnNavigation: function () {
                            anim.animGoals();
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),

                button('Peace Of Mind', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.peaceMindp(), 
                        OnNavigation: function () {
                            anim.peaceOfMind()
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),

                button('About Us', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.aboutUsp(), 
                        OnNavigation: function () {
                            anim.animAbout()
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),
                
                button('Quotes', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.qoutesp(), 
                        OnNavigation: function () {
                            anim.animqoutes();
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),
                
                button('Ying Yang', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.yingyangp(), 
                        OnNavigation: function () {
                            anim.animyingyang()
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
                webx.createElement({ tag:'br' }),

                button('Wars', null, function () {
                    webx.Navigate({
                        animate: false,
                        Page: App.warsp(), 
                        OnNavigation: function () {
                            anim.wars();
                            lcScrol.scrollLocomotion();
                        }
                    });
                }, 'class', 'my-2 hover:text-black cursor-pointer'),
            ]
        })
    )
}
