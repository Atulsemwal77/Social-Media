import { Link } from "react-router-dom";

const Welcome=()=>{
    return <>
    <center className="my-5">
    <h1>There are no posts</h1>
    <Link to="/create-post" className="btn btn-outline-primary my-3">Create Post</Link>

    </center>
    </>
}
export default Welcome;