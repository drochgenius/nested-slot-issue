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
            <slot name="first" on-slotchange="${(e: Event) => this.onSlotChange(e)}"><slot>
        `;
    }


    private onSlotChange(e: Event){
        e.stopPropagation();
        console.log('first::slot changed', e.target);

    }
}

customElements.define('first-element', FirstElement);
