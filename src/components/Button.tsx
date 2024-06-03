import useStore from "../stores/counter-store"
function Buttons(){

    const {increaseCounter, decreaseCounter} = useStore((state) => ({
        increaseCounter: state.increaseCounter,
        decreaseCounter: state.decreaseCounter
    }))
    return(
        <>
            <button onClick={increaseCounter}>+</button>
            <button onClick={decreaseCounter}>-</button>
        </>
    )
}

export default Buttons