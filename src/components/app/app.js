import React, { Component } from "react";

import AppHeader from "../app-header";
import PostList from "../post-list";

import "./app.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          taste: "с фуа-гра",
          dose: 10,
          present: "мышь",
          weight: "0,5",
          isBought: false,
          description: "Чего сидишь? Порадуй котэ, ",
          id: 1,
        },
        {
          taste: "с рыбой",
          dose: 40,
          present: "2 мыши",
          weight: "2",
          isBought: false,
          description: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          id: 2,
        },
        {
          taste: "с курой",
          dose: 100,
          present: "5 мышей",
          happy: "заказчик доволен",
          weight: "5",
          isBought: true,
          description: "qwetestqwer",
          id: 3,
        },
      ],
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="pattern">
        <div className="container">
          <AppHeader />
          <PostList posts={this.state.data} />
        </div>
      </div>
    );
  }
}
