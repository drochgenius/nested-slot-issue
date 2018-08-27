const section: HTMLElement = document.querySelector('article');
const divs: HTMLElement[] = Array.from(document.querySelectorAll('section'));

function createShadowRoot(el: HTMLElement, label: string, slotName: string, color: string): void {
    const shadowRoot: ShadowRoot = el.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `
    <style>h1 { color: ${color}; font-size: 1rem; }</style>
    <h1>${label}</h1>
    <slot name="${slotName}">
    `;
}

// Create shadow roots for the internal elements
for (const div of divs) {
    createShadowRoot(div, 'internal element', 'second', 'red');
}

// Create shadow root for the extenal element
createShadowRoot(section, 'external element', 'first', 'green');
