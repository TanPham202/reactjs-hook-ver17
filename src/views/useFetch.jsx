import { useEffect, useState } from "react";
import axios from "axios";

// Tham số trong hàm "useFetch" là API được lấy từ kết nối ở DemoCustomHook
const useFetch = (url) => {

    const [dataLocal, setDataLocal] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDataAPI = async() => {
        setTimeout(async () => {
            let res = await axios.get(url)
            let data = res && res.data ? res.data : [];
            setDataLocal(data)
            setLoading(false);
        },3000)
    }

    useEffect(() =>{
        getDataAPI();
    },[])

    // Trả các dữ liệu về để cho phép sử dụng
    return {
        dataLocal, loading
    }
}

export default useFetch;