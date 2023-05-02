import "./addmovie.css";
import ReactStars from "react-rating-stars-component";
import { useRef,useState } from "react";

export default function AddMovie({adding}) {

    let titleRef = useRef();
    let imgurlRef = useRef();
    let trailerurlRef = useRef();
    
    let descRef = useRef();
    let [rate, setRate] = useState(0);
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setRate(newRating);
    };

    function submitted(ev){
        ev.preventDefault();


        let movieObject = {
                            title:titleRef.current.value,
                            trailer:trailerurlRef.current.value.replace("watch?v=","embed/"), 
                            img:imgurlRef.current.value, 
                            description:descRef.current.value, 
                            
                            rating:rate
                        };
        adding(movieObject);
    }

    return (
        <div className="AddMovie">
            <form onSubmit={submitted}>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Title:</label>
                    <div className="col-sm-10">
                    <input name="title" ref={titleRef} type="text" className="form-control" id="colFormLabel"  />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Image URL:</label>
                    <div className="col-sm-10">
                    <input ref={imgurlRef} type="text" className="form-control" id="colFormLabel"  />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Trailer:</label>
                    <div className="col-sm-10">
                    <input ref={trailerurlRef} type="text" className="form-control" id="colFormLabel"  />
                    </div>
                </div>

              

                <div className="input-group">
                    <span className="input-group-text">Description:</span>
                    <textarea ref={descRef} className="form-control" aria-label="With textarea"></textarea>
                </div>

                <div className="rating">
                <h6> Rating :  </h6>
                <ReactStars count={10}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            activeColor="#ffd700"/>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">ADD THE MOVIE</button>
                </div>
            </form>
        </div>
    )
}
