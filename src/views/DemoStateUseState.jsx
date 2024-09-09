import { useState } from 'react';

const DemoStateUseState = () => {

    // State: Quản lí dữ liệu
    let [name, setName] = useState('Tan'); // Gán trực tiếp biến "name" thành Tan
    const [address, setAddress] = useState(''); // Gán biến "address" là rỗng

    const handleEventChange = (event) => {
        setAddress(event.target.value); // Cập nhật lại state bằng hàm setState
    }

    return (
        <>
            {/* Lấy dữ liệu trực tiếp từ State */}
            <div> My name is: {name} </div> 
            <br/>
            <div>
                <input  type="text" value={address} onChange={(event) => handleEventChange(event)} />
                <br/>
                My address is {address}
            </div>
        </>
);
}
export default DemoStateUseState;