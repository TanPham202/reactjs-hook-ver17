import { useParams } from 'react-router-dom';
import './Blog.scss';
import useFetch from "./useFetch";

const DetailBlog = () => {
    // Lấy tham số trên URL gán vào biến "id"
    // id phải giống với route bên App
    let {id} = useParams();

    // Custom Hook
    const { dataLocal: dataDetailBlog, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    return (
        <>
            <h1> Hello detail blogs with id = {dataDetailBlog.id} </h1>
            <div className="blogs-container">
                { loading === false && dataDetailBlog ?
                    <div className="single-blog">
                        <div className="title"> {dataDetailBlog.title} </div>
                        <div className="content"> {dataDetailBlog.body} </div>
                    </div>
                    :
                    <div style={{textAlign: 'center !important'}}> Loading data... </div>
                }
            </div>
        </>
    )
}

export default DetailBlog;