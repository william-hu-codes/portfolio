import images from "../../assets/images"
import "./Error.css"

export default function Error() {
    return (
        <div className="error-div">
            <h1>ERROR 404</h1>
            <h2>PAGE NOT FOUND</h2>
            <img src={images.errorGif} />
        </div>
    )
}