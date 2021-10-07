import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log({count});
    document.title = "La page n°"+toString({count});
    return (
        <div class="card" style={{width:"30em", margin: '0 auto'}}>
            <div class="card-header">
                Par exemple, on va voir les boutons
            </div>
            <button
                type="button"
                class="btn btn-primary"
                onClick={()=>setCount(count+1)}
                style={{margin: "1em"}}
            >
                Ce bouton incrémente
            </button>
            <p style={{marginBottom: "1em"}}>Là genre ça vaut {count}</p>
        </div>
    )
};

export { Counter };