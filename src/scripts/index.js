'use strict';

const scriptLoader = (function() {

    function loadScripts(scripts) {
        for (const script of scripts) {
            let scr = require(`./${script}.js`);
            scr.default.init();
        }
    }

    return {
        init(scripts) {
            loadScripts(scripts);
        }
    }
})();

export default scriptLoader;