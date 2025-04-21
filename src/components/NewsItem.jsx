import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, date, source} = this.props;
    return (
      <div>
        {/* badge-pill class in bootstrap will not work so use bootstrap 5 */}
        <div className="card mt-sm-2 mb-2" style={{ width: "20rem" }}>
        <div className="position-absolute badge rounded-pill bg-danger" style={{right: '0', top: '-7px'}}>
         {source}
          <span className="visually-hidden">unread messages</span>
        </div>
          <img
            src={imageUrl}
            className="card-img-top"
            style={{ height: "161px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-primary btn-sm">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
