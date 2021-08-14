'use strict';

function Route(name, htmlName, defaultRoute, scripts = [], styles = []) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute, scripts, styles);
    } catch (e) {
        console.log(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    scripts: undefined,
    styles: undefined,
    constructor(name, htmlName, defaultRoute, scripts, styles) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
        this.scripts = scripts;
        this.styles = styles;
    },
    isActiveRoute(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}

export default Route;