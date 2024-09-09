import { useEffect, useState } from "react";
import axios from "axios";

const DemoConditionalLoadingMessage = () => {

    const [dataLocal, setDataLocal] = useState([]);
    const [loading, setLoading] = useState(true)

    const getDataAPI = async() => {
        // Dữ liệu từ API lấy về sẽ được hiển thị sau 3 giây
        setTimeout(async () => {
            let res = await axios.get('https://jsonplaceholder.typicode.com/todos/') // API lấy được gán vào biến res
            let data = res && res.data ? res.data : []; // Nếu có dữ liệu thì gán vào biến data, không thì gán mảng rỗng
            // Gán data vào biến state "dataLocal" trong State
            setDataLocal(data)
            setLoading(false);
        },3000)
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
                    {/* Nếu state loading có giá trị là "false" và có dữ liệu thì sau 3 giây sẽ hiện ra, ngược lại hiện chữ Loading... */}
                    { loading === false && dataLocal && dataLocal.length > 0 ? 
                        <>
                            { dataLocal.map(item => {
                                return(
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.title} </td>
                                    </tr>
                                )
                            })}
                        </>
                        :
                        <tr >
                            <td colSpan='5' style={{'textAlign': 'center'}}> Loading... </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default DemoConditionalLoadingMessage;