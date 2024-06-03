import useStore from "../stores/counter-store"

function Counter(){

    const counter = useStore((state) => state.counter);
    
    return (   
        <p>
            {counter}
        </p>

    )
}

export default Counter