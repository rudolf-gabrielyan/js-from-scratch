class DodgeDOM {

    render(component, dom) {
        const Component = component();

        dom.innerHTML = Component
    }

}

export default DodgeDOM;