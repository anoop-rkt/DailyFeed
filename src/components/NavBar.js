import React from 'react'
import dailyfeed from './images/dailyfeed.png'
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'



const NavBar = () => {
    // const [allData, setAllData] = useState([])
    // const [filteredData, setFilteredData] = useState(allData);
    // const search = (key) => {
    //     let result = [];
    //     fetch(` https://newsapi.org/v2/everything?q=${key}&sortBy=publishedAt&apiKey=${props.apiKey}`)
    //         .then((data) => {
    //             data.json().then((response) => {
    //                 setAllData(response.data)
    //                 setFilteredData(response.data)
    //             })
    //         })
    // result = allData.filter((data) => {
    //     return data.source.search(key)
    // })
    // setFilteredData(result)
    // }
    // const search = (key) => {
    //     let result = [];
    //     result =allData.filter((data)=>{
    //          return data.title.search(key)!= -1
    //         })
    //         setFilteredData(result)
    // }
    //     useEffect((key) => {
    //         fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}?q=` + key)
    //             .then(response => {
    //                 setAllData(response.data)
    //                 setFilteredData(response.data)
    //             })
    //     }, [])
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={dailyfeed} alt='News logo' className={styles.dimension} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link " aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" style={{ width: '10rem', backgroundColor: ' #d9d9d9', color: 'black' }} onChange={(event) => search(event.target.value)} />
                            <div className="container">
                                {
                                    filteredData.length > 0 ?
                                        <div>
                                            {
                                                filteredData.map((element) => {
                                                    return <div className="col-md-4" key={element.url}>
                                                        <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                                    </div>
                                                })
                                            }
                                        </div>
                                        : "No Data Found"
                                }
                            </div>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default NavBar
