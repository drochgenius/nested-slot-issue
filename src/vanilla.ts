const section: HTMLElement = document.querySelector('article');
const divs: HTMLElement[] = Array.from(document.querySelectorAll('section'));

function createShadowRoot(el: HTMLElement, label: string, slotName: string): void {
    const shadowRoot: ShadowRoot = el.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<h1>${label}</h1><slot name="${slotName}">`;
}

// Create shadow roots for the internal elements
for (const div of divs) {
    createShadowRoot(div, 'internal element', 'second');
}

// Create shadow root for the extenal element
createShadowRoot(section, 'external element', 'first');

