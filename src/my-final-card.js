import { LitElement, html, css } from 'lit';



class MyFinalCard extends LitElement {
  static properties = {
    image: {type : String},
    alt:{type : String},
    title: {type : String},
    titleTwo : {type : String},
    description: {type : String},
    detailsBtnText : {type : String},
  }

  static styles = css`
     .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
        }
        .card-content {
          text-align: center;
          color: white;
          display: block;
         flex-direction: column;
         align-content: center;
        font-family: "Optima"
        }
        .card-container {
            background-color: #808080;
            width: 30%;
            margin: 50px;
            padding: 15px;
            border-radius: 15px;
        }
        .card-content img {
            max-width: 100%;
            border-radius: 5px;
        } 
        #cDescription {
    color: white;
    font-size: 18px; 
    font-family: "Optima"
    
  }

  #details-button {
    display: flex;
    border-radius: 4px ;
    background-color: whitesmoke;
    color: black;
    height: 22px ;
    width: 30%; 
    align-content: center; 
    justify-content: center;
    margin-left: 25px;
    margin-top: 50px;
    margin-bottom: 10px;
    font-family: "Optima";   
  }

  `;

  constructor() {
    super();
    this.image = 'https://dxbhsrqyrr690.cloudfront.net/sidearm.nextgen.sites/gopsusports.com/images/2019/4/12/DSC_3685.jpg';
    this.alt = 'Card Image';
    this.title = 'Penn State Lacrosse';
    this.titleTwo = 'Penn State Lax';
    this.description = 'Penn States Lacrosse is here to absolutely dominate all opponents!!';
    this.detailsBtnText = 'Click for Details';
  }

  firstUpdated() {
    const colorBtn = this.shadowRoot.querySelector('#colorBtn');
    const titleBtn = this.shadowRoot.querySelector('#titleBtn');
    const deleteBtn = this.shadowRoot.querySelector('#deleteBtn');
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');
    const cardDescription = this.shadowRoot.querySelector('#cDescription');
    const toggleDescription = this.shadowRoot.querySelector('#details-button')
    const btn = this.shadowRoot.querySelector('#btn');
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    const cards = this.shadowRoot.querySelector('.cards');
    const details = this.shadowRoot.querySelector('details');
    const summary = this.shadowRoot.querySelector('summary');
    const cardContent = this.shadowRoot.querySelector('.card-content');
    const cardImage = this.shadowRoot.querySelector('img');
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const cardClone = this.shadowRoot.querySelector('.card-container');
    const cardClone2 = this.shadowRoot.querySelector('.card-container');

    

    
    
    toggleDescription.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });
    
    cardContent.addEventListener('click', () => {
      cardImage.classList.toggle('hidden');
    });
    summary.addEventListener('click', () => {
      cardDescription.classList.toggle('hidden');
    });

  }

  changeTitle() {
    const cardTitle = this.shadowRoot.querySelector('#cardTitle');

    if(cardTitle.innerText == 'The Nitany Lions?') 
    {
      cardTitle.innerText == 'Penn State Lacrosse';
    }
    else {
      cardTitle.innerHTML = 'The Nitany Lions?';
    }
  }

  deleteCard () {
    const cards = this.shadowRoot.querySelector('.cards');
    const cardCount = cards.children.length;
    if(cardCount > 1) {
      cards.removeChild(cards.lastChild);
    }
  }


  randomColorGenerator() {
    const cardContainer = this.shadowRoot.querySelector('.card-container');
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    cardContainer.style.backgroundColor = '#' + randomColor;
    return randomColor;
  }

  cloneCard(e) {
    const card = this.shadowRoot.querySelector('.card-container');
    const clone = card.cloneNode(true);
    this.shadowRoot.querySelector('.cards').appendChild(clone);
  }
    

  render() {
    return html`
  <button id="btn" @click="${this.cloneCard}">Clone</button>
  <button id="colorBtn" @click="${this.randomColorGenerator}">Change Color</button>
  <button id="titleBtn" @click="${this.changeTitle}">Change Title</button>
  <button id="deleteBtn" @click="${this.deleteCard}">Delete Card</button>
  <div class="cards">
      <div class="card-container">
        <div class="card-content">
          <h2 id="cardTitle">${this.title}</h2>
          <p>${this.titleTwo}</p>
          <img src= ${this.image} alt= ${this.alt}>
        </div>
        <details>
          
        <summary id = "details-button" > ${this.detailsBtnText} </summary>
        <p id = "cDescription"><slot></slot>${this.description}</p>

        </details>
        
      </div>
    </div>
    `;
  }
}

customElements.define('my-final-card', MyFinalCard);