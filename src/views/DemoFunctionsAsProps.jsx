import { useState } from 'react';
import ChildComponent from './ChildComponent';

const DemoFunctionsAsProps = () => {

    const [arrPosition, setArrPosition] = useState([
        {id: '001', title: 'Dev', salary: '500$'},
        {id: '002', title: 'Test', salary: '400$'},
        {id: '003', title: 'Manager', salary: '1000$'}
    ])

    // Hàm lấy dữ liệu từ component con
    // "position" là tham số chứa giá trị của component con
    // Sao chép dữ liệu lấy được từ component con gán vào biến mới (newPosition) -> state (hook) không cho phép tự động merge
    // Sao chép lại dữ liệu của mảng rồi đẩy thêm biến chứa dữ liệu mới vào mảng
    const addNewPosition = (position) => {
        let newPosition = position;
        setArrPosition([...arrPosition, newPosition])
    }

    return (
        <>
            {/* Tạo props lấy dữ liệu từ component con */}
            <ChildComponent addNewPosition = {addNewPosition} 
                            position = {arrPosition} 
            />
        </>
    );
}
export default DemoFunctionsAsProps;