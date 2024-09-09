import { useState } from 'react';

const ChildComponent = (props) => {

    const {position, addNewPosition} = props;

    const [title, setTitle] = useState('');
    const [salary, setSalary] = useState('');

    const handleChangePosition = (event) => {
        setTitle(event.target.value);
    }

    const handleChangeSalary = (event) => {
        setSalary(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!title || !salary){
            alert('Missing!')
            return;
        }

        // Truyền dữ liệu từ state lên component cha thông qua props
        addNewPosition({
            id: Math.floor(Math.random()*1001),
            title: title,
            salary: salary
        })

        setTitle('');
        setSalary('');
    }

    return (
        <>
            <form>
                <label htmlFor="name"> Position </label> 
                <input type="text" onChange={(event) => handleChangePosition(event)} />
                <label htmlFor="job"> Salary </label>
                <input type="text" onChange={(event) => handleChangeSalary(event)} />
                <input type="submit" onClick={(event) => handleSubmit(event)} />
            </form>
            <hr />
            <>
                <div className="job-lists">
                    {
                        position.map((item, index) => {
                            return (
                                <div key = {item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div> 
            </>
        </>
    );
}
export default ChildComponent;