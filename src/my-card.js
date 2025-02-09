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
      title: { type: String },
      image: { type: String },
      fact: { type: String },
      detailLink: { type: String }
    };
  }

  constructor() {
    super();
    this.title = "Saquon Barkley";
    this.image = "https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3929630.png&w=350&h=254";
    this.fact = "#1 running back for the Philadelphia Eagles";
    this.detailLink = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 300px;
        padding: 8px;
        margin: 8px;
        text-align: center;
        background-color: grey;
        border: 4px solid darkgreen;
      }

      .card-image {
        width: 100%;
        height: 230px;
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
      }

      .detailbutton {
        color: white;
        border-radius: 4px;
        curspr: pointer;
      }
      @media (max-width: 500px) {
        :host {
          max-width: 90%;
          padding: 12px;
        }
        
        .card-image {
          height: 200px;
        }
        
        .card-title {
          font-size: 1.5em;
        }
        
        .fact {
          font-size: 0.9em;
        }
  }
    `;
  }

  render() {
    return html`
      <div class="saquon">
        <h1 class="card-title">${this.title}</h1>
          <img class="card-image" alt="${this.title}" src="${this.image}" />
          <p class="fact">${this.fact}</p>
          <a href="${this.detailLink}" class="detailbutton">Details</a>
        </div>
      `;
    }
  }

globalThis.customElements.define(MyCard.tag, MyCard);
