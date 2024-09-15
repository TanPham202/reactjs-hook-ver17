import React from 'react'
import { useState } from 'react';

const DemoLocalStorage = () => {
    let [name, setName] = useState('');
    let [job, setJob] = useState('');

    const handleSubmit = (e) => {
        // Tạo object có name và job lấy giá trị lấy từ state
        let object = {
            name: name,
            job: job
        }
        // Lấy dữ liệu của key "userList" trong local storage rồi gán vào biến "userList"
        let userList = localStorage.getItem("userList");
        // Nếu đã có thì thực hiện đẩy thêm dữ liệu mới vào
        if (userList){
            // Chuyển dữ liệu của biến "userList" từ JSON thành dạng String rồi gán vào biến "arr"
            let arr = JSON.parse(userList);
            // Thêm object vào biến "arr"
            arr.push(object);
            // Gửi lên local storage với sự quản lí của "userList"
            // Dữ liệu của biến "arr" phải là dạng JSON nên phải chuyển đổi
            localStorage.setItem("userList", JSON.stringify(arr));
        } 
        // Nếu không có thì gửi dữ liệu lên local storage là object đã tạo phía trên với sự quản lí của "userList"
        else{
            localStorage.setItem("userList", JSON.stringify([object]));
        }
        setName("");
        setJob("");
    }

    return (
        <>
            <form>
                <label htmlFor="name"> Name </label> <br/>
                <input type="text" onChange={(e) => setName(e.target.value)} /> <br/>
                <label htmlFor="job"> Job </label> <br/>
                <input type="text" onChange={(e) => setJob(e.target.value)} /> <br/>
            </form>
            <br />
            <button type="submit" onClick={(e) => handleSubmit(e)}> Submit on Local Storage </button>
            <span>-------------------------------------------</span>
            User's List:
            {localStorage.getItem("userList")} {/* Lấy dũ liệu trên local storage của "userList" để hiện ra  */}
        </>
    )
}

export default DemoLocalStorage