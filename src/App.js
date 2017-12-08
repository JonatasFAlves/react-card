import React, { Component } from 'react';

import Card from './components/Card/Card';

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        title: 'Learning React? Start small',
        img: '',
        body: 'Are you a newbie in React? Join me now and lets be newbies together!',
        comments: 7,
        hearts: 32
      }
    ],
    liked: false,
    emailSent: false
  }

  likeHandler = () => {
    const cards = {
      ...this.state.cards
    };

    const liked = this.state.liked;

    if (liked) {
      cards[0].hearts -= 1;
      this.setState({ cards, liked: !liked });
    } else {
      cards[0].hearts += 1;
      this.setState({ cards, liked: !liked });
    }
  }

  newCommentHandler = () => {
    const result = prompt('Write a new comment: ', 'Hey awesome post!');

    if (result) {
      const cards = {
        ...this.state.cards
      };

      cards[0].comments += 1;
      this.setState({ cards });
    }
  }
  
  newEmailHandler = () => {
    const result = prompt('Write a new email: ', 'Hey awesome post!');

    if (result) {
      if (!this.state.emailSent){
        this.setState({ emailSent: true });
      }
    }
  }

  render() {
    return (
      <div>
        <Card
          cardTitle={this.state.cards[0].title}
          cardBody={this.state.cards[0].body}
          cardComments={this.state.cards[0].comments}
          cardHearts={this.state.cards[0].hearts}
          liked={this.likeHandler}
          newComment={this.newCommentHandler}
          emailSent={this.state.emailSent}
          newEmail={this.newEmailHandler} />
      </div>
    );
  }
}

export default App;
