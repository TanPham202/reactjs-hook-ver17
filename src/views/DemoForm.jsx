import { useState } from 'react';

const DemoForm = () => {

    let [name, setName] = useState('');
    let [job, setJob] = useState('');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeJob = (event) => {
        setJob(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Submit thành công')
        console.log("Dữ liệu đã được cập nhật mới ở state: ", name, job)
    }

    return(
        <>
            <form>
                {/* Phần nhập thông tin */}
                <>
                    <label htmlFor="name"> Name </label> 
                    <br/>
                    <input type="text" onChange={(event) => handleChangeName(event)} />
                    <br/>
                    <label htmlFor="job"> Job </label>
                    <br/>
                    <input type="text" onChange={(event) => handleChangeJob(event)} />
                    <br/>
                </>
                {/* Phần gửi thông tin lên database */}
                <input type="submit" onClick={(event) => handleSubmit(event)}/>
            </form>
        </>  
    )
}

export default DemoForm;