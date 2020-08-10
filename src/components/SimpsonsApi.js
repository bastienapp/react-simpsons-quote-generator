import React from 'react';
import QuoteCard from './QuoteCard';
import axios from 'axios';

class SimpsonsApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { character: null };
  }

  componentDidMount() {
    this.loadQuote();
  }

  async loadQuote() {
    axios
      .get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          character: data[0],
        });
      });
  }

  render() {
    return (
      <div className='SimpsonsApi'>
        {this.state.character !== null ? (
          <>
            <QuoteCard character={this.state.character} />
            <button
              onClick={() => {
                this.setState({ character: null });
                this.loadQuote();
              }}
            >
              Load a new quote
            </button>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default SimpsonsApi;
