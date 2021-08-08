import React, { Component } from "react";
import "./Tour.scss";

class Tour extends Component {
  state = {
    toggleInfo: false,
  };

  infoHandler = () => {
    this.setState({
      toggleInfo: !this.state.toggleInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <section className="tour">
        <div className="img-container">
          <img src={img} alt={id} />
          <span
            onClick={() => {
              removeTour(id);
            }}
            className="close-btn"
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="tour-info-container">
          <h3> {city} </h3>
          <h4> {name} </h4>
          <h5>
            info
            <span
              className="fas fa-caret-square-down"
              onClick={this.infoHandler}
            ></span>
          </h5>

          {this.state.toggleInfo && <p>{info}</p>}
        </div>
      </section>
    );
  }
}

export default Tour;
