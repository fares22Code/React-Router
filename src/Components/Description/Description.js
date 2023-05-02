import "./description.css";
import {useParams} from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import { useNavigate } from 'react-router-dom';


export default function Description({list}) {

    const navigate = useNavigate();
    console.log(list.length);
    let params = useParams();
   
   

    return (

        
        <div className="desc">
           

            
            {  ( isNaN(params.id) || list.length <= parseInt(params.id)) ?  <p>No Movie With this ID </p> :
            
            <>
           
            <MovieCard ele={list[params.id]} /> 
            <iframe width="560" height="315" src={list[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
<br/>
<>
<div class="d-grid gap-2 col-6 mx-auto">
  <button onClick={() => navigate(-1)} class="btn btn-primary" type="button">- -     GO BACK      - -</button>
  
</div>
</>
            </>

            
            }
        </div>
        
    )

    
}
