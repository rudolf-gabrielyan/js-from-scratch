'use strict';

import scriptLoader from "../scripts";
import cssLoader from "../css";

function Router(routes, layout) {
    try {
        if(!routes) {
            throw 'error: routes param is mandatory';
        }

        this.constructor(routes, layout);

        this.init();
    } catch (e) {
        console.log(e);
    }
}

Router.prototype = {
    routes: undefined,
    layout: undefined,
    header: undefined,
    body: undefined,
    constructor(routes, layout) {
        this.routes = routes;
        this.layout = layout;
        this.header = document.getElementById('header');
        this.body = document.getElementById('app');
    },
    init() {
        const r = this.routes;
        (function(scope, r) {
            window.addEventListener('hashchange', function(e) {
                scope.hasChanged(scope, r);
            })
        })(this, r);

        this.layout && this.drawTemplate(this.layout, this.header);
        this.hasChanged(this, r);
    },
    hasChanged(scope, r) {
        if(window.location.hash.length > 0) {
            for(let i = 0, length = r.length; i < length; i++) {
                let route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route);
                }
            }
        } else {
            for(let i = 0, length = r.length; i < length; i++) {
                let route = r[i];
                if(route.default) {
                    scope.goToRoute(route);
                }
            }
        }
    },
    highlightNavLink(hashedPath) {
        const links = document.getElementsByClassName('active');
        for (const link of links) {
            link.classList.remove('active');
        }

        const link = document.querySelectorAll(`a[href="#${hashedPath}"]`)[0];
        link.classList.add('active');
    },
    drawTemplate(path, destination) {
        return new Promise((resolve) => {
            destination.innerHTML = '';
            const xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if(this.readyState === 4 && this.status === 200) {
                    destination.innerHTML += this.responseText;
                    resolve();
                }
            }

            xhttp.open('GET', path, true);
            xhttp.send();
        })
    },
    async goToRoute({ htmlName, scripts, styles, name }) {
        cssLoader.init(styles);
        await this.drawTemplate(htmlName, this.body);
        scriptLoader.init(scripts);
        this.highlightNavLink(name);
    }
}

export default Router;