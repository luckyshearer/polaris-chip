import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      fact: { type: String },
      detailLink: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "";
    this.fact = "";
    this.detailLink = "https://hax.psu.edu"; 
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 300px;
        height: 500px;
        padding: 16px;
        margin: 8px;
        text-align: center;
        background-color: grey;
        border: 4px solid darkgreen;
        box-sizing: border-box;
      }

      .saquon {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      :host([fancy]) .card {
        background-color: lightgreen;
        border: 4px solid darkgreen;
        box-shadow: 10px 5px 5px darkgreen;
      }

      :host([fancy]) {
        background-color: lightgreen;
      }

      .card-image {
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 16px;
      }

      .card-title {
        color: darkgreen;
        margin-bottom: 2px;
        }

      .fact {
        color: darkgreen;
        margin-bottom: 16px;
        text-align: center;
        font-size: 16px;
        flex-grow: 1;
      }

      .detailbutton {
        color: white;
        border-radius: 4px;
        cursor: pointer;
      }

  details summary {
    text-align: left;
    font-size: 20px;
    padding: 8px 0;
  }

  details[open] summary {
    font-weight: bold;
  }
  
  details div {
    border: 2px solid black;
    text-align: left;
    padding: 8px;
    height: 70px;
    overflow: auto;
  }
    `;
  }

  // put this anywhere on the MyCard class; just above render() is probably good
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="saquon">
        <h1 class="card-title">${this.title}</h1>
          <img class="card-image" alt="${this.title}" src="${this.image}" />
          <p class="fact"><slot></slot></p>
          <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>details</summary>
          <div>
            <slot></slot>
            <a href="${this.detailLink}" target="_blank">
              <button class="btn"><em>Link for more info</em></button>
            </a>
          </div>
        </details>
          
        </div>`;
    }
  }

globalThis.customElements.define(MyCard.tag, MyCard);
