'use strict';

const cssLoader = (function() {
    const links = [];

    function loadStyles(styles) {
        resetStyles();

        for (const style of styles) {
            const head = document.getElementsByTagName('HEAD')[0]; 
  
            let link = document.createElement('link');
    
            link.rel = 'stylesheet'; 
        
            link.type = 'text/css';
        
            link.href = `./src/css/${style}.css`; 
    
            head.appendChild(link); 

            links.push(link);
        }
    }

    function resetStyles() {
        for (const link of links) {
            link.remove();
        }
    }

    return {
        init(styles) {
            loadStyles(styles);
        }
    }
})();

export default cssLoader;