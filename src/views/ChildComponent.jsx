const ChildComponent = (props) => {

    const {name, position} = props;

    return (
        <>
            Name: {name}
            <div className="position-lists">
                {
                    position.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
export default ChildComponent;