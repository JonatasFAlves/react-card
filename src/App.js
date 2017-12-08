import React, { Component } from 'react';

import Card from './components/Card/Card';

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Learning React? Start small',
        img: '',
        body: 'Are you a newbie in React? Join me now and lets be newbies together!'
      }
    ]
  }

  render() {
    return (
      <div>
        <Card 
          cardTitle={this.state.cards[0].title}
          cardBody={this.state.cards[0].body} />
      </div>
    );
  }
}

export default App;
