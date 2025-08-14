export let Styles = {
    root: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden;
            background-color: black;
                overflow-x: hidden;
                overflow-y: auto; 
                height: 100%;
            color: white;
            margin: 0;
            padding: 0;
        } #Body {
            color: white;
        } ${
            SetMdTheme({
                primaryC: colors.white,
                OnPrimaryC: colors.black,
            }) 
        } ::root{
            --md-sys-color-surface-container-highest: ${colors.white};
            --md-filled-text-field-label-text-color: ${colors.black};
            --md-filled-text-field-input-text-color: ${colors.black};
        } ::selection {
            color: black;
            background-color: white;
        } #p2 span {
            opacity: 0;
            transform: translateY(120px);
        } .vdt {
            background: url('./src/assets/3d.mp4') center/cover no-repeat;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text; /* For Firefox */
        }
    `, 

    style2: `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        body {
            font-family: 'Poppins', sans-serif;
            overflow-x: hidden;
            background-color: black;
            color: white;
            margin: 0;
            padding: 0;
        } ${
            SetMdTheme({
                primaryC: colors.black,
                OnPrimaryC: colors.white,
            }) 
        } ::root{
            --md-sys-color-surface-container-highest: ${colors.white};
            --md-filled-text-field-label-text-color: ${colors.black};
            --md-filled-text-field-input-text-color: ${colors.black};
        } ::selection {
            color: black;
            background-color: white;
        }
    `
}
