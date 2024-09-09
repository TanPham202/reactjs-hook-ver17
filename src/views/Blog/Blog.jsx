import useFetch from "./useFetch";
import './Blog.scss';
import { useHistory } from "react-router-dom";

const Blog = () => {

    // Custom Hook
    const { dataLocal: dataBlog, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

    let newData = [];
    if (dataBlog && dataBlog.length > 0) {
        newData = dataBlog.slice(0, 9)
    }

    let history = useHistory();
    const handleBackData = (setId) => {
        history.push(`/blog/${setId.id}`); // Chuyển sang trang /blog/id của dữ liệu được chọn
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
                                <button onClick={() => handleBackData(item)}> View detail </button>
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