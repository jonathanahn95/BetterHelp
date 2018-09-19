import React from 'react';
import ReactDOM from 'react-dom';

class FilterForm extends React.Component {

  render() {
      return (
        <div className="background-gray">
          <div className="content-container price-form-container">
            <h1>Browsing Restaurants in Manhattan, NY</h1>
            <div className="price-form">
            {
              [1, 2, 3, 4].map( num => (
                <div className="price-filter-checkbox" key={num}>
                  <input id={`price-filter-${num}`}
                    className="price-filter-input"
                    onChange={this.changePriceAndBorder(num)}
                    type="checkbox"
                    value={num}
                    checked={this.state.prices[num]} />
                  <label htmlFor={`price-filter-${num}`}>{this.dollaSignChooser(num)}</label>
                </div>
              ))
            }
              <div className="filter-button"
              id="open-now"
              onClick={this.openNowChange}
              style={this.state.openNowStyle}>
                <input type="button"/>
                <label>Open Now</label>
              </div>
              <div className="filter-button"
              id="delivers"
              onClick={this.deliversChange}
              style={this.state.deliversStyle}>
                <input type="button"/>
                <label>Order Delivery</label>
              </div>
              <div className="filter-button"
              id="take-out"
              onClick={this.takeoutChange}
              style={this.state.takeoutStyle}>
                <input type="button"/>
                <label>Order Takeout</label>
              </div>
              <div className="filter-button"
              id="take-out"
              onClick={this.clearFilters} >
                <input type="button"/>
                <label>Clear Filters</label>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
