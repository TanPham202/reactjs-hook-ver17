import useFetch from './useFetch';

const DemoCustomHook = () => {
    // Sử dụng customHook
    // Biến "dataLocal" và biến "loading" lấy từ trong state của useFetch
    // Kết nối với useFetch
    const {dataLocal, loading} = useFetch('https://jsonplaceholder.typicode.com/todos/')

    return (
        <>
            <h3> Fake data API </h3>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                    </tr>
                </thead>
                <tbody>
                    { loading === false && dataLocal && dataLocal.length > 0 ? 
                        <>
                            { dataLocal.map(item => {
                                return(
                                    <tr>
                                        <td> {item.id} </td>
                                        <td> {item.title} </td>
                                    </tr>
                                )
                            })}
                        </>
                        :
                        <tr >
                            <td colSpan='5' style={{'textAlign': 'center'}}> Loading... </td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}

export default DemoCustomHook;