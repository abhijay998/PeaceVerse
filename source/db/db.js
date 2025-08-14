export let Db = {
    link3d: 'https://my.spline.design/particles-gzxkuy9ksClRZjCaxDR99sgm/',
    textArr: [`Generally, Peace a situation or a period of time`, ` in which there is no war or violence in a country or area but, It is more than that it is also about you your mindfullness your state of calmness and also you fighting for peace.`],
    textArr2: [`We have to raise a voice for peace to stop wars`, ` and even for maintaining a persons natural well being. Peace is a virtue which can give you the best (karma / side effect) of saving the world`],
    Info: ['We', 'are', `some`, `developers`, `who`, `made`, `this website`, `for the`, `Sanskar Valley Tech Fest 2025.`, `We are`, `the members of`, `the Team of SPS SN (Middle school)`, `Here`, `is`, `a`, `General`, `Introduction`, `About US`],
    yinYang: [`Originating`, `in`, `Chinese philosophy`, `, yin and yang,`, `also yinyang`, `or yin-yang`, `is the`, `concept`, `of opposite cosmic`, `principles or forces`, `that`, `interact`, `interconnect`, `and`, `perpetuate`, `each`, `other.`, `It is known as`, 'the symbol', 'for do get good.'],
    PeaceOfMD: [`Peace`, `of mind`,  `refers to`,  `a state`, `of mental`, `and`, `emotional calmness`, `, free from`,  `worry, anxiety, and stress.`,  `It's a feeling of`, `contentment, serenity,`, `and well-being, often`, `associated with the`, `absence of negative`, `emotions and the`, `presence`, `of a positive`, `outlook.`],
    Quotes: [`Originating`, `in`, `Chinese philosophy`, `, yin and yang,`, `also yinyang`, `or yin-yang`, `is the`, `concept`, `of opposite cosmic`, `principles or forces`, `that`, `interact`, `interconnect`, `and`, `perpetuate`, `each`, `other.`, `It is known as`, 'the symbol', 'for do get good.'],
    Wars: [`Wars`, `they`, `currently`, `are`, `the`, `most`, `scariest`, `thing`, `in`, `the`, `world`, `as`, `they`, `cause`, `destruction`, `loss`, `of`, `lives`, `and`, `econimic`, `downfall`, `and`, `the`, `worst`, `of`, `all`, `Loss`, `of`, `Peace.`, `A War`, `is`, `a`, `state`, `of`, `armed`, `conflict`, `between`, `different`, `political`, `groups`, `often`, `involving`, `significant`, `hostilities`, `and`, `lasting`, `for`, `a`, `considerable`, `duration`],
    PeaceOfMD2: [`Wars a are linked with (karma or ying yang formula) as the wars cuase loss of lives of civilians and also decrease in the amount`, `of human also it effects the environment. Neuclear wepons now have the ability to destroy the world.`],
    Goals: [`Originating`, `in`, `Chinese philosophy`, `, yin and yang,`, `also yinyang`, `or yin-yang`, `is the`, `concept`, `of opposite cosmic`, `principles or forces`, `that`, `interact`, `interconnect`, `and`, `perpetuate`, `each`, `other.`, `It is known as`, 'the symbol', 'for do get good.'],
    vd: function () {
        return (
            webx.createElement({
                tag: 'video',
                attribute: [
                    { key: 'src', value:'./src/assets/rc.mp4' },
                    { key: 'autoplay', value:true },
                    { key: 'loop', value: true },
                    { key: 'muted', value: true },
                    { key: 'class', value: 'absolute top-0 left-0 w-full h-full object-cover z-0' }
                ] 
            })
        )
    }, fr: function () {
        return (
            webx.createElement({
                tag: 'iframe',
                attribute: [
                    { key: 'class', value: 'absolute top-0 left-0 w-full h-full object-cover z-0' },
                    { key: 'src', value: 'https://my.spline.design/thresholddarkambientui-F6Lp1cF31m0Gs8gOTSUDMdjn/' },
                    { key: 'frameborder', value: '0' }
                ]
            })
        )
    }
}
