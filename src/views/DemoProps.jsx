import ChildComponent from './ChildComponent';

const DemoProps = () => {

    return (
        <>
            {/* Truyền dữ liệu xuống component con thông qua props */}
            <ChildComponent name = {'Tan'}
                            nick_name = {'Asa'} 
                            job = {'Dev'} 
            />
        </>
    );
}
export default DemoProps;