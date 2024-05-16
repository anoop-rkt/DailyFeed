import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { PropTypes } from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - DailyFeed`
        updateNews()
        //eslint-disable-next-line
    }, [])
    const fetchMoreData = async () => {
        const storedData = localStorage.getItem(`${props.category}ArticlesData`);

        if (storedData) {
            // If data for this category is already stored, use it
            const parsedData = JSON.parse(storedData);
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            setPage(page + 1); // Increment page for the next fetch
        } else {
            // If data is not stored, fetch it from the API
            const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;

            try {
                let data = await fetch(url);
                let parsedData = await data.json();

                // Store fetched data locally in JSON format
                localStorage.setItem(`${props.category}ArticlesData`, JSON.stringify(parsedData));

                // Update state with fetched data
                setArticles(parsedData.articles);
                setTotalResults(parsedData.totalResults);
                setPage(page + 1); // Increment page for the next fetch
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }

    return (
        <>
            <h2 className='text-center ' style={{ margin: '34px 0px', marginTop: '90px' }}>DailyFeed - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}>
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultPropTypes = {
    country: 'in',
    pageSize: 8,
    category: 'General'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News
