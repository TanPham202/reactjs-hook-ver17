import { useEffect, useState } from "react";
import axios from "axios";

// Tham số trong hàm "useFetch" là API được lấy từ kết nối ở Blog
const useFetch = (url) => {

    const [dataLocal, setDataLocal] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDataAPI = () => {
        const ourRequest = axios.CancelToken.source() // Tạo cancel token <-- 1st step

        const fetchData = async() => {
            try{
                // API lấy được gán vào biến res + Gán cancel token vào request muốn cancel
                let res = await axios.get(url, { 
                    cancelToken: ourRequest.token // <-- 2nd step
                })
                let data = res && res.data ? res.data : []; 
                setDataLocal(data)
                setLoading(false);
            }
            catch (err){
                // Nếu cancel thành công thì in ra "Request canceled" và ngưng gửi request
                // Nếu cancel thất bại thì gửi request thành công , thay đổi giá trị State Loading
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message);
                } else {
                    setLoading(false);
                }
            }
        }

        setTimeout(() => {
            fetchData();
        },3000)

         // Trả về thông báo cancel <-- 3rd step
        return () => {
            ourRequest.cancel('Operation canceled by the user.')
        }
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