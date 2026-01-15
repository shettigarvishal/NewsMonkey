import React from "react";

const NewsItem=(props)=> {
  
    let { title, description, imageurl, newsurl, author, date, source } =props;
    return (
      <div>
        <div className="card">
          <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:0}}>
            <span
              className="badge rounded-pill bg-warning"
              style={{ left: "90%", zIndex: "1" }}
            >
              {source}
            </span>
          </div>

          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small style={{ color: "green" }}>
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsurl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
