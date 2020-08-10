import React from 'react';
import './QuoteCard.css';

class QuoteCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
    };
  }

  render() {
    return (
      <figure className='QuoteCard'>
        <img
          src={this.props.character.image}
          alt={this.props.character.character}
        />
        <figcaption>
          <blockquote>{this.props.character.quote}</blockquote>
          <p>
            <cite>{this.props.character.character}</cite>
            <span
              className={this.state.favorite ? 'is-favorite' : ''}
              onClick={(event) => {
                const favorite = !this.state.favorite;
                this.setState({ favorite: favorite });
              }}
            >
              &#9733;
            </span>
          </p>
        </figcaption>
      </figure>
    );
  }
}

export default QuoteCard;
