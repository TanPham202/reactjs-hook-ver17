import { useParams } from 'react-router-dom';

const DetailBlog = () => {
    // Lấy tham số trên URL gán vào biến "id"
    // id phải giống với route bên App
    let {id} = useParams();
    return (
        <h1> Hello detail blogs with id = {id} </h1>
    )
}

export default DetailBlog;