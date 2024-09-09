import { useEffect, useState } from "react";
import axios from "axios";

const DemoAxios = () => {

    const [dataLocal, setDataLocal] = useState([]);

    const getDataAPI = async() => {
        let res = await axios.get('https://jsonplaceholder.typicode.com/todos/') // API lấy được gán vào biến res
        let data = res && res.data ? res.data : []; // Nếu có dữ liệu thì gán vào biến data, không thì gán mảng rỗng
        setDataLocal(data) // Gán data vào biến state "dataLocal" trong State
    }

    useEffect(() =>{
        getDataAPI();
    },[])

    return (
        <>
            <h3> Fake data API </h3>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                    </tr>
                </thead>
                <tbody>
                    { dataLocal && dataLocal.length > 0 && dataLocal.map(item => {
                        return(
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.title} </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default DemoAxios;