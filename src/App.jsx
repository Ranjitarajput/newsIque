import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
 
  constructor() {
    super();
    // this.apiKey = process.env.REACT_APP_NEWS_API;  //it will not work in vite app
    //env vr name shuold be start fron VITE if app created using vite otherwise REACT_APP 
    this.apiKey = import.meta.env.VITE_NEWS_API;
    this.state = {
      searchQuery: "",
      progress: 10
    }
  }

  setSearchQuery = (query) => {
    this.setState({searchQuery : query});
    console.log(query)
  }

   setProgress = (process) => {
    this.setState({progress: process});
   }
  

 
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          {/* props ke form me fun pass kiya */}
          <LoadingBar
            color="#1919f1"
            progress={this.state.progress}
            onLoaderFinished={() => this.setProgress(0)}
          />
            <Navbar setSearchQuery={this.setSearchQuery}/>
            
            <Routes>
              {/* Your error is caused by the incorrect use of <Route>. In React Router v6, components must be passed as the element prop inside <Route>, rather than as children. */}
              {/* for exact match we should use [exact] apiKey={this.apiKey} key word  */}
              {/* kyuki news component already mount hai to react use bar bar mount nahi kark=ga updated props ke sath to remount karwane ke liye eack rooute ke sath component ko unique apiKey={this.apiKey} key pass karenge taki each route pe request aane pe component remount ho  */}
              <Route path="/" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/business" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} category="business" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/entertainment" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} category="entertainment" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/general" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} category="general" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/health" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} category="health" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/science" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} category="science" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/sports" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} category="sports" searchQuery={this.state.searchQuery}/>}> </Route>
              <Route path="/technology" exact element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} category="technology" searchQuery={this.state.searchQuery}/>}> </Route>
            </Routes>

        </Router>
      </div>
    )
  }
}

