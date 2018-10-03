import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/css/App.css';
import '../assets/css/Card.css';

class ClueCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardText: props.children,
      clueIsShowing: false,
      showAnswerLink: false,
      answerIsShowing: false
    };

    this.showClue = this.showClue.bind(this);
    this.hideClue = this.hideClue.bind(this);
    this.showAnswerLink = this.showAnswerLink.bind(this);
    this.toggleAnswer = this.toggleAnswer.bind(this);
  }

  showClue(e) {
    e.currentTarget.remove();

    this.setState({
      clueIsShowing: true
    });

    setInterval(
      () => this.showAnswerLink(),
      1000
    );
  }

  hideClue() {
    this.setState({
      clueIsShowing: false
    });
  }

  showAnswerLink() {
    this.setState({
      showAnswerLink: true
    });
  }

  toggleAnswer() {
    if (!this.state.answerIsShowing) {
      this.setState({
        cardText: this.props.answer
      });
    } else {
      this.setState({
        cardText: this.props.children
      });
    }

    this.setState({
      answerIsShowing: !this.state.answerIsShowing
    });
  }

  render() {
    let valueClass = 'large';
    if(this.props.value.length === 4) {
      valueClass = 'medium';
    }

    let textClass = 'small';
    if(this.state.cardText.length < 20) {
      textClass = 'large';
    }

    return (
      <div className="clue-card">
        <button className={`clue-card__value ${valueClass}`} onClick={this.showClue}><span className="dollar-sign">$</span>{this.props.value}</button>
        <div className={`clue-card__inner ${textClass} ${this.state.clueIsShowing ? 'show' : 'hidden'}`}>
          <div className="clue-card__inner-wrapper">
            <div className="clue-card__clue">{this.state.cardText}</div>
            <button className={`clue-card__answer-link ${this.state.showAnswerLink ? '' : 'hidden'}`} onClick={this.toggleAnswer}>Toggle Answer</button>
            <button className={`clue-card__close-link ${this.state.showAnswerLink ? '' : 'hidden'}`} onClick={this.hideClue}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

function CategoryCard(props) {
  return (
    <div className="category-card">
      <div className="card__inner-text">{props.children}</div>
    </div>
  );
}

function Board(props) {
  const board = Object.keys(props.data).map(category => {
    return (
      <div className="column">
        <CategoryCard>{category}</CategoryCard>
        {Object.values(props.data[category]).map((card) => (<ClueCard value={card.value} answer={card.answer}>{card.clue}</ClueCard>))}
      </div>
    );
  });

  return (
    <div className="board">{board}</div>
  );
}

function App() {
  const boardData = {
    "OCTOBER OBSERVANCES": [
      {
        value: "200",
        clue: "The U.K. celebrates this fruit's day on October 21; events include the Longest Peel competition",
        answer: "Apple Day"
      },
      {
        value: "400",
        clue: "In tribute to this man, the U.N. declared his birthday, October 2, International Day of Non-Violence",
        answer: "(Mohandas) Ghandi"
      },
      {
        value: "600",
        clue: "Bring Fido & Felix to the Blessing of the Animals on October 4, the feast day of this saint",
        answer: "St. Francis"
      },
      {
        value: "800",
        clue: "The invention of this language's alphabet by King Sejong on Oct. 8, 1446 is observed annually",
        answer: "Korean"
      },
      {
        value: "1000",
        clue: "October 10 is “World” this “Health Day”, but it doesn't mean you're supposed to take one to skip work",
        answer: "Mental Health"
      }
    ],
    "SAILING INTO HISTORY": [
      {
        value: "200",
        clue: "This little lady that sailed with Columbus was originally named the Santa Clara",
        answer: "The Santa Maria"
      },
      {
        value: "400",
        clue: "The 1915 sinking of this ocean liner heightened tensions between the U.S. & Germany",
        answer: "The Lusitania"
      },
      {
        value: "600",
        clue: "It's said to have gotten its famous nickname after British shot bounced off its wooden hull in 1812",
        answer: "Old Ironsides (or Constitution)"
      },
      {
        value: "800",
        clue: "Tainted borscht led to a 1905 mutiny on this Russian battleship, an event made into a movie in 1925",
        answer: "The Potemkin"
      },
      {
        value: "1000",
        clue: "In 1717 Blackbeard converted a captured French slave ship & named it this late queen's “Revenge”",
        answer: "Queen Anne's Revenge"
      }
    ],
    "PORTUGUESE PRIMER": [
      {
        value: "200",
        clue: "Boa tarde is said when someone is wishing you to have a “good” this part of the day",
        answer: "The afternoon"
      },
      {
        value: "400",
        clue: "No animals are killed in the tourada, the Portuguese version of this event",
        answer: "A bullfight"
      },
      {
        value: "600",
        clue: "A necessity on sunny days is um oleo de bronzear, which is this",
        answer: "Suntan lotion or sunscreen"
      },
      {
        value: "800",
        clue: "Feliz aniversario! means happy birthday, while feliz Pascoa! means this",
        answer: "Happy Easter"
      },
      {
        value: "1000",
        clue: "The national emotion is saudade, a form of this, from the Greek for “return home”",
        answer: "Nostalgia"
      }
    ],
    "GEMS & JEWELS": [
      {
        value: "200",
        clue: "The orient is the term for the surface iridescence of this mollusk product",
        answer: "Pearl"
      },
      {
        value: "400",
        clue: "This gem scores a perfect 10 on the Mohs hardness scale",
        answer: "Diamond"
      },
      {
        value: "600",
        clue: "Turquoise is a December birthstone; March has this other watery blue gem with a “Q” in its name",
        answer: "Aquamarine"
      },
      {
        value: "800",
        clue: "The top selling yellow gem—its name reflects its lemony color",
        answer: "Citrine"
      },
      {
        value: "1000",
        clue: "Iggy Azalea's real first name is this, a purple gemstone",
        answer: "Amethyst"
      }
    ],
    "WEIRD AL-CHEMY": [
      {
        value: "200",
        clue: "“Like A Surgeon”",
        answer: "Madonna"
      },
      {
        value: "400",
        clue: "“Eat It”",
        answer: "Michael Jackson"
      },
      {
        value: "600",
        clue: "“Canadian Idiot”",
        answer: "Green Day"
      },
      {
        value: "800",
        clue: "“I Love Rocky Road”",
        answer: "Joan Jett"
      },
      {
        value: "1000",
        clue: "“I Want A New Duck”",
        answer: "Huey Lewis (And the News)"
      }
    ],
    "AT THE ZOO": [
      {
        value: "200",
        clue: "The zoo in Wellington, New Zealand works to preserve this national bird & other endangered native animals",
        answer: "The Kiwi"
      },
      {
        value: "400",
        clue: "A pioneer in cageless exhibits, this southern California zoo founded in 1916 is home to more than 650 species",
        answer: "The San Diego Zoo"
      },
      {
        value: "600",
        clue: "Don't worry if we miss the Aldabra variety of these reptiles on our visit to Central Florida Zoo—they can live to be 200!",
        answer: "Tortoises"
      },
      {
        value: "800",
        clue: "This capital's zoo was created from the personal animal collection of King William IV of Prussia",
        answer: "The Berlin Zoo"
      },
      {
        value: "1000",
        clue: "200 rubles gains you admission to Russia's Novosibirsk Zoo & its many exotic animals, such as this feline hybrid",
        answer: "A Liger"
      }
    ],
  };

  return (
    <div>
      <Board data={boardData} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();