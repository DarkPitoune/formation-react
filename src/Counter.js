import { useState } from "react";

const Counter = (props) => {
    const [count, setCount] = useState(0);
    console.log(props);
    return (
        <div class="card" style={{width:"auto", margin: '2em'}}>
            <div class="card-header">
                {props.title}
            </div>
            <button
                type="button"
                class="btn btn-primary"
                onClick={()=>setCount(count+1)}
                style={{margin: "1em"}}
            >
                Ce bouton incrémente
            </button>
            <p style={{margin: "1em auto"}}>Là genre ça vaut {count}</p>
        </div>
    )
};

export { Counter };