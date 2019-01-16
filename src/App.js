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
    this.onSearchHandler = this.onSearchHandler.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  state = {
    results: [],
    total: 0,
    is_loading: false,
    query: "",
    page: 1
  };

  onSearchHandler(query) {
    this.setState({
      query
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState(
        {
          page: 1
        },
        () => {
          this.getSearch();
        }
      );
    }
  }

  loadMore() {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.getSearch(true);
      }
    );
  }

  async getSearch(is_loadmore) {
    const result = await axios.get(
      `${API_URL}?apikey=${API_KEY}&s=${this.state.query}&page=${
        this.state.page
      }`
    );
    this.setState({
      results: is_loadmore
        ? [...this.state.results, ...result.data.Search]
        : result.data.Search
    });
  }

  render() {
    return (
      <Layout>
        <SearchInput onSearch={this.onSearchHandler} />
        <ListItem
          movies={this.state.results}
          is_loading={this.state.is_loading}
          onLoadMore={this.loadMore}
        />
      </Layout>
    );
  }
}

export default App;
