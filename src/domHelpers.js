export function createDiv() {
    return document.createElement('div');
}

export function createH1(text) {
    const h1 = document.createElement('h1');
    h1.textContent = text;
    return h1;
}

export function createH2(text) {
    const h2 = document.createElement('h2');
    h2.textContent = text;
    return h2;
}

export function createH3(text) {
    const h3 = document.createElement('h3');
    h3.textContent = text;
    return h3;
}

export function createH4(text) {
    const h4 = document.createElement('h4');
    h4.textContent = text;
    return h4;
}

export function createP(text) {
    const p = document.createElement('p');
    p.textContent = text;
    return p;
}
