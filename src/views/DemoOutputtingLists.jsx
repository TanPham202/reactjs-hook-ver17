import { useState } from 'react';
import ChildComponent from './ChildComponent';

const DemoOutputtingLists = () => {

    const [job, setJob] = useState('Tan');
    const [arrPosition, setArrPosition] = useState([
        { id: '001', title: 'Dev', salary: '500$' },
        { id: '002', title: 'Test', salary: '400$' },
        { id: '003', title: 'Manager', salary: '1000$' }
    ])

    return (
        <>
            {/* Truyền dữ liệu từ state xuống component con thông qua props */}
            <ChildComponent name = {job} 
                            position = {arrPosition} 
            />
        </>
    );
}
export default DemoOutputtingLists;