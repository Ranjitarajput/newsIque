import React, {Component} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loadding: false,
      page: 1,
      totalResults: 0
    };
  }

  updateNews = async () => {
   
    let queryParam = this.props.searchQuery
      ? `q=${this.props.searchQuery}`
      : "";
    let url = `https://newsapi.org/v2/top-headlines?${queryParam}&country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // console.log(url);
    this.props.setProgress(1);
    this.setState({ loadding: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.props.setProgress(50); //dekh lena 
   
      this.setState({articles: parseData.articles});
      this.setState({totalResults: parseData.totalResults});
      this.setState({loadding: false});

    this.props.setProgress(100);  //dekh lena

    console.log("PROPS IN PRODUCTION:", this.props);
console.log("API KEY:", this.props.apiKey);
console.log("Category:", this.props.category);
console.log("Page Size:", this.props.pageSize);
 
    // console.log(parseData);
  }



  async componentDidMount() {
  this.updateNews();
}

 async componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) ////////////
      this.setState({ page: 1 }, () => this.updateNews());
  }

  // Your handlePreviewsClick function may not be working properly because of how this.setState works asynchronously. When you update the page state, the change is not immediately available in updateNews().

  handlePreviewsClick = async () => {

    this.setState(
       ({ page: prevState.page - 1 }),
      () => this.updateNews()
    );

    console.log(this.props.searchQuery);
  };

  handleNextClick = async () => {
 

    //3 way
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.updateNews()
    );
  };

  fetchMoreData = async () => {
    // this.setState((prevState) => ({ page: prevState.page + 1 }));
    const nextPage = this.state.page + 1;

    let queryParam = this.props.searchQuery
    ? `q=${this.props.searchQuery}`
    : "";
  let url = `https://newsapi.org/v2/top-headlines?${queryParam}&country=us&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
  // console.log(url);
 
  this.setState({ loadding: true });
  let data = await fetch(url);
  let parseData = await data.json();
  
  this.setState({
    articles: this.state.articles.concat(parseData.articles),
    totalResults: parseData.totalResults,
    loadding: false,
    page: nextPage
  });
 
  };

  render() {
    return (
      <div className="container ps-md-5 ">
          <h2 className="text-center my-4">FactFlux - Daily news </h2>
          {this.state.loadding && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length || 0}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={this.state.articles.length !== this.state.totalResults ? <Spinner /> : "complete all the news"}
          >
            <div className="container">
            <div className="row mt-3">
              {/* if we dont set a unique key for each child then it will give an err message in console so eack article ahs uniqeu url or id uniue nahi hai we can not use id but url are unique use any of this  */}
              {this.state.articles.length !== 0 ? (
                this.state.articles.map((ele) => {
                  return (
                    <div className="col-sm-12 col-md-6 col-lg-4" key={ele.url}>
                      <NewsItem
                        title={ele.title ? ele.title.slice(0, 48) : ""}
                        description={
                          ele.description
                            ? ele.description.slice(0, 105)
                            : "read in detail"
                        }
                        imageUrl={
                          ele.urlToImage
                            ? ele.urlToImage
                            : "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                        url={ele.url}
                        author={ele.author}
                        date={ele.publishedAt}
                        source={ele.source.name}
                      />
                    </div>
                  );
                })
              ) : this.state.loadding ? (
                <p>Loding.....</p>
              ) : (
                <p>No results found </p>
              )}
            </div>
            </div>
          </InfiniteScroll>
              
          {/* <div className="container d-flex justify-content-between mb-5">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-primary btn-sm "
              onClick={this.handlePreviewsClick}
            >
              {" "}
              &larr; Previews
            </button>
            <button
              disabled={
                this.state.page >=
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-primary btn-sm "
              onClick={this.handleNextClick}
            >
              {" "}
              Next &rarr;
            </button>
          </div> */}
       
      </div>
    );
  }
};

