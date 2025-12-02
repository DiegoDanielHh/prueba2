import { Link } from "react-router-dom";

function Nav(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                            <Link class="nav-link active" to="/historia">Historia</Link>
                            <Link class="nav-link active" to="/trajes">Trajes de morenada</Link>
                            <Link class="nav-link active" to="/entradas">Entradas</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav;