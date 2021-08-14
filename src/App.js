'use strict';

import Router from '../src/router/router';
import Route from '../src/router/route';
import './style.css';

(function() {
    function init() {
        const router = new Router(
            [
                new Route('users', 'src/pages/users/index.html', null, ['users'], ['users']),
                new Route('repositories', 'src/pages/repositories/index.html', null, ['repositories']),
            ], 
            'src/components/layouts/header.html'
        );
    };
    init();
})();