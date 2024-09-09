import { useState, useEffect } from 'react';

const MyComponent = () => {

    const [address, setAddress] = useState('');

    // useEffect tương đương componentDidMount và chỉ chạy 1 lần sau khi đã render giao diện
    useEffect(() => {
        console.log('Chạy hàm chỉ một lần')
    }, []);

    // useEffect tương đương componentDidUpdate và chỉ cập nhật với state "address"
    useEffect(() => {
        setAddress('49/2/4')
        console.log('Chạy cập nhật')
    }, [address]);

    return (
        <>
            <div> hello my component </div>
        </>
    );
}
export default MyComponent;