import { html, LitElement } from '@polymer/lit-element/lit-element';
import { TemplateResult } from 'lit-html/lit-html';

export class SecondElement extends LitElement {
    public banner: string = 'internal element';

    static get properties(): { [key: string]: string | object } {
        return {
            banner: String
        };
    }

    protected _render({ banner }: SecondElement): TemplateResult {
        return html`
            <style>h1 { color: red; font-size: 1rem; }</style>
            <h1>${banner}</h1>
            <slot name="second"><slot>
        `;
    }
}

customElements.define('second-element', SecondElement);