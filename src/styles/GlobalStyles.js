import { createGlobalStyle } from 'styled-components';

import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
    
    @font-face {
        font-family: "Montserrat-Regular";
        src: url("../assets/fonts/montserrat/Montserrat-Regular.ttf") format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing:border-box;
    }

    *:focus{
        outline: 0;
    }

    html, body, #root {
        height: 100vh;
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a{
        text-decoration: none;
    }
    
    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
    }




/* ANTD DESIGN */

/* .site-layout .site-layout-background {
  background: #fff;
}

.site-layout .site-layout-background-darken {
  background: #001529;
}
 */

`;