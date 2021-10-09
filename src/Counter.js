const Counter = (props) => {
    return (
        <div class="card" style={{width:"auto", margin: '2em'}}>
            <div class="card-header">
                {props.title}
            </div>
            <button
                type="button"
                class="btn btn-primary"
                style={{margin: "1em"}}
            >
                Ce bouton incrémente
            </button>
            <p style={{margin: "1em auto"}}>Imagine ce truc pourrait compter les clics ?</p>
        </div>
    )
};

export { Counter };