function Card(props) {
    return (
        <>
            <div class="card" style={{width: "18rem"}}>
                <img src={props.imagen} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.titulo}</h5>
                        <p class="card-text">{props.contenido}</p>
                    </div>
            </div>
        </>
    );
}
export default Card;   