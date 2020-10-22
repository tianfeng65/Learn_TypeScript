export class Header {
    constructor() {
        const element = document.createElement('div')
        element.innerText = 'this is header'
        document.body.appendChild(element)
    }
}

export class Content {
    constructor() {
        const element = document.createElement('div')
        element.innerText = 'this is content'
        document.body.appendChild(element)
    }
}

export class Footer {
    constructor() {
        const element = document.createElement('div')
        element.innerText = 'this is footer'
        document.body.appendChild(element)
    }
}