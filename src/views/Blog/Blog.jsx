import useFetch from "./useFetch";
import './Blog.scss';
import { Link } from "react-router-dom";

const Blog = () => {

    // Custom Hook
    const { dataLocal: dataBlog, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
    }

    return (
        <div className="blogs-container">
            { loading === false && newData && newData.length > 0 ?
                <>
                    { newData.map(item => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title"> {item.title} </div>
                                <div className="content"> {item.body} </div>
                                {/* Chuyển sang trang /blog/id của dữ liệu được chọn */}
                                <button> <Link to={`/blog/${item.id}`} > View detail </Link> </button>
                            </div>
                        )
                    })}
                </>
                :
                <div style={{textAlign: 'center !important'}}> Loading data... </div>
            }
        </div>
    )
}

export default Blog;