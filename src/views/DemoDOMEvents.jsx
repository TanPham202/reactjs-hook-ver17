import { useState } from 'react';

const DemoDOMEvents = () => {
    let [name, setName] = useState('Tan');

    // Hàm thực hiện sự kiện onChange
    const handleEventChange = (event) => {
        setName(event.target.value);
    }

    // Hàm thực hiện sự kiện onClick
    const handleEventClick = () => {
        alert('Actived')
    }

    return (
        <>
             {/* Sự kiện onChange */}
            <div>
                <input  type="text" value={name} onChange={(event) => handleEventChange(event)} />
                <br/>
                My name is {name}
            </div>
            {/* Sự kiện onClick */}
            <div>
                <button type="button" onClick={() => handleEventClick()}> Active event </button>
            </div>
        </>
    );
}

export default DemoDOMEvents;