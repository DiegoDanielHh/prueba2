import Card from "./Card";
import Footer from "./Footer";
import Nav from "./Nav";

function Trajes(props){
    return(
        <>
        <h1>hola trajes</h1>
        <Nav></Nav>
        <div className="row g-2 mt-3">
            <div className="col">
                <Card imagen="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" titulo="hola que tal" contenido="nosequeponer"></Card>
            </div>
            <div className="col">
                <Card imagen="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" titulo="hola" contenido="nosequeponersdfs"></Card>

            </div>
            <div className="col">
                <Card imagen="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" titulo="hola 3" contenido="nosequeponerkkkkkkkkkk"></Card>

            </div>
            <div className="col">
                <Card imagen="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" titulo="hola 4" contenido="nosequeponerllllll"></Card>

            </div>
            <div className="col">
                <Card imagen="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" titulo="hola 5" contenido="nosequeponermmm"></Card>

            </div>
        </div>
        <Footer></Footer>
        </>
    );
}
export default Trajes;