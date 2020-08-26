import React, { Component } from "react";

import "./post-list-item.css";
import styled from "styled-components";
import { render } from "@testing-library/react";

export default class PostListItem extends Component {
  state = { choice: false };

  onItemClick = () => {
    console.log(`кликнуто ${this.props.taste}`);

    if (!this.state.choice) {
      this.setState({ choice: true });
    } else if (this.state.choice) {
      this.setState({ choice: false });
    }
  };

  render() {
    const {
      taste,
      dose,
      present,
      happy,
      weight,
      isBought,
      description,
    } = this.props;

    let classNameCont = "cont ";
    let classNamePromo = "promo ";
    let classNames = "weight";
    let desLink;
    let res_description;

    let GreyComponent = styled.div`
      color: rgb(102, 102, 102);
    `;

    let BoughtComponent = styled.div`
      color: white;
    `;

    const { choice } = this.state;
    if (choice && !isBought) {
      classNamePromo += " choice ";
    }

    if (weight === "0,5") {
      classNames += " little";
      classNamePromo += "littleimg";
      desLink = "купи";
    } else if (weight === "2") {
      classNames += " middle";
      classNamePromo += "middleimg";
    } else if (weight === "5") {
      classNames += " big";
      classNamePromo += "bigimg";
    }

    if (isBought) {
      classNamePromo += " sold";
      res_description = `Печалька, ${taste} закончился.`;

      BoughtComponent = styled.div`
        color: #ffff66;
      `;

      GreyComponent = styled.div`
        color: #b3b3b3;
      `;
    }

    if (res_description == null) {
      res_description = description;
    }

    return (
      <div className={classNameCont}>
        <div className={classNamePromo} onClick={this.onItemClick}>
          <GreyComponent className="promo-item ">
            {" "}
            Сказочное заморское яство{" "}
          </GreyComponent>
          <h1 className="title-item "> Нямушка </h1>
          <p className="taste ">{taste}</p>
          <GreyComponent className="dose ">{dose} порций </GreyComponent>
          <GreyComponent className="present">
            {present} в подарок {happy}
          </GreyComponent>
          <div className="container-weight">
            <div className={classNames}>
              <p className="numb">{weight} </p>
              <p className="kilo">кг</p>
            </div>
          </div>
        </div>
        <div>
          <BoughtComponent className="description ">
            {res_description}
            <a href="#" className="des-link" onClick={this.onItemClick}>
              {desLink}
            </a>
          </BoughtComponent>
        </div>
      </div>
    );
  }
}
