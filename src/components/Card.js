import React from "react";
import { connect } from "react-redux";

import { addProductAction } from "../actions/addProductAction";

class Card extends React.Component {
  handleAddProduct = () => {
    this.props.addProduct(this.props.title, this.props.price);
    console.log(this.props);
    console.log("działa");
  };

  render() {
    const { title, price, image, alt, description } = this.props;
    return (
      <div className="ui card">
        <div className="image">
          <img src={image} alt={alt} />
        </div>
        <div className="content">
          <h2 className="header">{title}</h2>
          <div className="description">{price}</div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <button
            className="ui right floated button"
            onClick={this.handleAddProduct}
          >
            <i className="shopping basket icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basket: state.basket
});

export default connect(mapStateToProps, { addProduct: addProductAction })(Card);
