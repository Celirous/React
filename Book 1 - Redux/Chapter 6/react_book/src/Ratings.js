import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = { rating: this.props.rating }; // this state is what is going to make it so that we can dynamically update (EXAMPLE 2)
  }

  handleClick(ratingValue) {
    this.setState({ rating: ratingValue }); // this will take in one argument for the rating value that it will be updating (EXAMPLE 3). Here if you make the rating 1 it will make ratingValue 1 as well.
  }

  render() {
    return (
      <div>
        <div>
          {/* EXAMPLE 1: Passing data using props object (props= cannot be updated once it has been incerted) */}
          {/* <h1>Rating: {this.props.rating}</h1>
          {this.props.rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.props.rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.props.rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.props.rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.props.rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />} */}

          {/* EXAMPLE 2: Passing Data using local state var (state = we can dynamically update the state of something, in this case, as the rating drops or increases, it will reflect)  */}
          {/* <h1>Rating: {this.state.rating}</h1>
          {this.state.rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.state.rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.state.rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.state.rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
          {this.state.rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />} */}

          {/* EXAMPLE 3: What it is doing in this code, if you click on one of the stars, it will pass the value of that click into the value of the star and update it dynamically for you. Another way to think of this, "if you click on a star, update the value of the outputted data to reflect this, it will also change the rating="?" value that we set in the App.js " */}

          <h1>Rating: {this.state.rating}</h1>
        </div>
        <div style={styles.starStyle}>
          {this.state.rating >= 1 ? (
            <IoIosStar onClick={this.handleClick.bind(this, 1)} />
          ) : (
            <IoIosStarOutline onClick={this.handleClick.bind(this, 1)} />
          )}
          {this.state.rating >= 2 ? (
            <IoIosStar onClick={this.handleClick.bind(this, 2)} />
          ) : (
            <IoIosStarOutline onClick={this.handleClick.bind(this, 2)} />
          )}
          {this.state.rating >= 3 ? (
            <IoIosStar onClick={this.handleClick.bind(this, 3)} />
          ) : (
            <IoIosStarOutline onClick={this.handleClick.bind(this, 3)} />
          )}
          {this.state.rating >= 4 ? (
            <IoIosStar onClick={this.handleClick.bind(this, 4)} />
          ) : (
            <IoIosStarOutline onClick={this.handleClick.bind(this, 4)} />
          )}
          {this.state.rating >= 5 ? (
            <IoIosStar onClick={this.handleClick.bind(this, 5)} />
          ) : (
            <IoIosStarOutline onClick={this.handleClick.bind(this, 5)} />
          )}
        </div>
      </div>
    );
  }
}
export default Rating;

const styles = {
  starStyle: {
    color: "orange",
  },
};
