
import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card " style={{ boxShadow: " 5px 10px 8px #888888", height: '500px' }} >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '89%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={!imageUrl ? "https://assets.sentinelassam.com/h-upload/2023/01/13/430014-chandra-x-ray-observatory.jpg" : imageUrl} className="card-img-top" alt="..." style={{ height: "200px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-danger">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div >
    )
}

export default NewsItem
