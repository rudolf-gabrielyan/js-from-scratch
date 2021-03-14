import DodgeDOM from '../freamwork/DodgeDOM';
import App from './App';

const Main = (function() {
    const DOM = new DodgeDOM();

    return {
        init: function() {
            DOM.render(App, document.getElementById('app'))
        }
    }
})()

Main.init()