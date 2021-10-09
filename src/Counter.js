import { useState } from "react";

const Counter = (props) => {
/*    const [count, setCount] = useState(0);
    const whenUclick = () => setCount(count+1);*/
    let lecompte = 0;
    const quantuclic = () => lecompte = lecompte+1;
    return (
        <div class="card" style={{width:"auto", margin: '2em'}}>
            <div class="card-header">
                {props.title}
            </div>
            <button
                type="button"
                class="btn btn-primary"
                onClick={quantuclic}
                style={{margin: "1em"}}
            >
                Ce bouton incrémente
            </button>
            <p style={{margin: "1em auto"}}>Là genre ça vaut {lecompte}</p>
        </div>
    )
};

export { Counter };