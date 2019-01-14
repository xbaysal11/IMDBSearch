import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, SearchInput, ListItem } from "./components";
import axios from "axios";

const API_URL = "http://www.omdbapi.com";
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
    const result = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${s}`);
    this.setState({
      results: result.data.Search
    });
  }

  render() {
    return (
      <Layout>
        <SearchInput onSearch={this.getSearch} />
        {/* {this.state.results.map(m => (
          <div>
            <img src={m.Poster} alt="" />
          </div>
        ))} */}
        {this.state.results.map(m => (
          <div>
            <ListItem cover={m.Poster} />
            {/* <img src={m.Poster} alt="" /> */}
          </div>
        ))}
      </Layout>
    );
  }
}

export default App;
