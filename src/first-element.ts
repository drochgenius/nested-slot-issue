import { html, LitElement } from '@polymer/lit-element/lit-element';
import { TemplateResult } from 'lit-html/lit-html';

export class FirstElement extends LitElement {
    public banner: string = 'external element';

    static get properties(): { [key: string]: string | object } {
        return {
            banner: String
        };
    }

    protected _render({ banner }: FirstElement): TemplateResult {
        return html`
            <style>h1 { color: green; font-size: 1rem; }</style>
            <h1>${banner}</h1>
            <slot name="first"><slot>
        `;
    }
}

customElements.define('first-element', FirstElement);
