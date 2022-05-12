// code Here
// function List({ carName, color, qty }) {
function List(props) {

    // console.log(props);

    const { carName, color, qty } = props
    return (
        <div>
            <h1>
                {carName} - {color} - {qty}
            </h1>
            <button>{carName}</button>
        </div>
    )
}

export default List