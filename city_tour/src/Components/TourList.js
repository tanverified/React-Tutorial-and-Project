import React, { Component } from "react";
import Tour from "./Tour";
import tourData from "../tourData";
import "./TourList.scss";

class TourList extends Component {
  state = {
    tours: tourData,
  };

  removeTourHandler = (id) => {
    const { tours } = this.state;
    const sortedTours = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTours,
    });
  };
  refreshTours = () => {
    this.setState({
      tours: tourData,
    });
  };
  render() {
    const { tours } = this.state;

    return (
      <div className="tourList">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              removeTour={this.removeTourHandler}
              refreshTours={this.refreshHandler}
            />
          );
        })}
        <center>
          {this.state.tours.length === 0 && (
            <button onClick={this.refreshTours}>Show All Tours</button>
          )}
        </center>
      </div>
    );
  }
}

export default TourList;
