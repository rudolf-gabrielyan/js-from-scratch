'use strict';
import { fetchAPI } from '../helpers/fetch';

const users = (function() {
    const searchKeyInput  = document.getElementById('key');

    function search(e) {
        e.preventDefault();

        const q = searchKeyInput.value;

        if(q) {
            //to-do implement the request
        }
    }

    return {
        init(){
            document.addEventListener('click', function(e) {
                if(e.target && e.target.id === 'searchUser') {
                    search(e);
                };
            })
        }
    }
})();

export default users;