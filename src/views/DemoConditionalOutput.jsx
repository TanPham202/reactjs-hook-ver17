import React from 'react'
import { useState } from 'react';

const DemoConditionalOutput = () => {

    const [showForm, setShowForm] = useState(true);

    const handleShowHide = () => {
        setShowForm(!showForm);
    }

    return (
        <>
            { showForm ? 
                <button onClick={() => handleShowHide()}> Show form </button> 
                : 
                <>
                    <fieldset>
                        <form>
                            <label htmlFor="name"> Name </label> 
                            <br/>
                            <input type="text" />
                            <br/>
                            <label htmlFor="job"> Job </label>
                            <br/>
                            <input type="text" />
                            <br/>
                            <input type="submit" />
                        </form>
                    </fieldset>
                    <br/>
                    <button onClick={() => handleShowHide()}> Hide form </button> 
                </>
            }
        </>
    )
}

export default DemoConditionalOutput