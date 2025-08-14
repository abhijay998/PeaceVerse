import { Styles } from './styles/Style.js';
import { App } from './index.js';
import { anim } from './anim/gsapf.js';
import { lcScrol } from './anim/Locomotive Scroll/locomtion.js';
import { Handler } from '../lib/htmlHandler.js';
export function Loginpp() {
    return (
        webx.CreateApp({
            isParentReq: false,
            home: Home({
                style: Styles.style2,
                scaf: Scaf({
                    body: Body({
                        Content: [
                            webx.createElement({
                                tag: 'div',
                                attribute: [
                                    { key: 'class', value: 'w-[100%] h-[100vh] flex sm:justify-center items-center bg-center bg-[url(./src/assets/nova.png)] bg-cover' }
                                ], html: [
                                    webx.createElement({
                                        tag: 'div',
                                        attribute: [
                                            { key: 'class', value: 'p-6 w-full sm:w-[30vw] bg-black/30 backdrop-blur-xl rounded-lg shadow-lg' }
                                        ], html: [
                                            webx.createElement({
                                                tag: 'div',
                                                attribute: [
                                                    { key: 'class', value: 'flex justify-between my-8' }
                                                ], html: [
                                                    h1('Join Us'),
                                                    h1('Peace Verse')
                                                ]
                                            }), webx.createElement({
                                                tag: 'div',
                                                html: `
                                                <md-filled-text-field class="my-3 w-full text-black" label="Username" type="text">
                                                </md-filled-text-field> <br>
                                                
                                                <md-filled-text-field class="my-3 w-full text-black" label="Password" type="password">
                                                </md-filled-text-field> <br>

                                                <md-filled-text-field class="my-3 w-full text-black" label="Email" type="emial">
                                                </md-filled-text-field> <br>
                                                `
                                            }), Button({
                                                tag: 'filled',
                                                attributes: [{ key:'class', value:'rounded-lg my-4 mr-4' }],
                                                html: [ h1('Join US') ]
                                            }), Button({
                                                tag: 'outlined',
                                                attributes: [{ key:'class', value:'rounded-lg my-4' }],
                                                html: [ h1('Home') ],
                                                eventC: function () {
                                                    webx.Navigate({
                                                        animate: false,
                                                        Page: App.homep(), 
                                                        OnNavigation: function () {
                                                            Handler.RendererAccountHandler.Inspection.Animation.Render();
                                                            anim.animationH();
                                                            lcScrol.scrollLocomotion();
                                                        }
                                                    });
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    )
}
