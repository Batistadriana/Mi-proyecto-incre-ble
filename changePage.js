import {logIn} from './loginTemplate.js';
import {register} from './registerTemplate.js';
import {newsSection} from './newSection.js';

const ponmeloAqui = document.getElementById('container'); //se trae el container que está en HTML a mi JS

//en las rutas estoy poniendo la terminación de la URL y el template que va a jalar.
let routers = {
    '/': logIn,
    '/login': logIn,
    '/register': register,
    '/news': newsSection,
}

//función que imprime las rutas
window.onpopstate = () => {
    ponmeloAqui.innerHTML= routers[window.location.pathname]; //trae las rutas creadas y al actualizar no cambian.                                
}

export let pusheameloAqui = (pathName) =>{
    window.history.pushState({}, pathName, window.location.origin + pathName); //concatena la URL y la "pushea"
    ponmeloAqui.innerHTML = routers[pathName]; //imprime tu ruta pathName
}

ponmeloAqui.innerHTML = routers[window.location.pathname];