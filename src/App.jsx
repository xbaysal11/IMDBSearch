import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, SearchInput } from "./components";
import axios from "axios";

const API_KEY = "7009910c";

class App extends Component {
  constructor() {
    super();
    this.getSearch = this.getSearch.bind(this);
  }

  state = {
    results: []
  };

  async getSearch(s) {
    const result = await axios.get(
      `http://www.omdbapi.com?apikey=${API_KEY}&s=${s}`
    );
    this.setState({
      results: result.data.Search
    });
  }

  render() {
    return (
      <Layout>
        <SearchInput onSearch={this.getSearch} />
        {this.state.results.map(m => (
          <div>
            <img src={m.Poster} alt="" />
          </div>
        ))}
      </Layout>
    );
  }
}

export default App;
