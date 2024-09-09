const ChildComponent = (props) => {

    const jobTitle = props.job; // Cách 1 khai báo props
    const {name, nick_name} = props; // Cách 2 khai báo props (áp dụng cho khi có nhiều props)

    return (
        <>
            Component con nhận được: 
            <br/>
            <div> Nghề nghiệp: {jobTitle} </div> {/* Cách 1 hiển thị dữ liệu props */}
            <div> Tên: {name} - Biệt danh: {nick_name} </div> {/* Cách 2 hiển thị dữ liệu props */}
            Biệt danh 2: {props.nick_name} {/* Cách 3 hiển thị dữ liệu props */}
        </>
    );
}
export default ChildComponent;