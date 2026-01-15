import React,{useEffect,useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  const capitalizeFirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

    //console.log("I'm a constuctor from news component");
    document.title = `${capitalizeFirstletter(
      props.category
    )} |News Monkey`;
  
  const  updateNews=async ()=> {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`; //page and pagesize set here to browse
    setLoading(true);
    props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(70);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  useEffect(() => {
    updateNews();
    
  }, [])

  const handleNextClick = async () => {
    setPage(page+1);
    updateNews();
  };
  const handlePreviousClick = async () => {
   setPage(page-1);
    updateNews();
  };
  const fetchMoreData = async() => {
    setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`; //page and pagesize set here to browse
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat( parsedData.articles));
    settotalResults(parsedData.totalResults);
    
    
  };
    return (
      <>
        <h1 className="text-center" style={{ margin: "40px,0px" }}>
          NewsMonkey - Top {capitalizeFirstletter(props.category)}{" "}
          HeadLines
        </h1>
        {loading && <Spinner />}
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
          <div className="conatiner">
        <div className="row">
          {/* {!this.state.loading && */}
          {/*this side commeneted line used for display the spinner that should write 
          alongg with next line article.map first this line inside flower braces then after && then that this.state.....
           condition this was now commenting because of infinite scroll*/}
           
          {articles.map((element) => {
            return (
              <div className="col-md-4 my-2" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageurl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://mma.prnewswire.com/media/2860287/Delta_Air_Lines__Boeing_787_Dreamliners.jpg?p=facebook"
                  }
                  newsurl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pagesize)
            }
            className="btn btn-info"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  
}
 News.deaultPros = {
    country: "us",
    pagesize: 5,
    category: "sports",
  };

  News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;
