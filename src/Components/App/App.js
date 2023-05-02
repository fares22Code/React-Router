import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';
import Description from '../Description/Description.js';
import {Routes,Route } from "react-router-dom";

const info = [
  { title:'Avatar',trailer:"https://www.youtube.com/watch?v=CM79GTEm2ps", img:'/image/Avatar.jpg', description:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.", rating:7.9 },
  { title:'The Exorcism Of Emily Rose',trailer:"https://www.youtube.com/watch?v=Bs5IUEVXQ9k", img:'/image/The Exorcism Of Emily Rose.jpg', description:"A lawyer takes on a negligent homicide case involving a priest who performed an exorcism on a young girl.", rating:6.7 },
  { title:'The Fast And The Furious',trailer:"https://www.youtube.com/watch?v=2TAOizOnNPo", img:'/image/The Fast And The Furious.jpg', description:"Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.", rating:6.8},
  { title:'New Police Story',trailer:"https://www.youtube.com/watch?v=acZdPoun35g", img:'/image/New Police Story.jpg', description:"A hero cop accidentally leads his team into a trap from which he is the only survivor. Drowning his guilt in booze, he is eventually assigned a new younger partner who turns out to have his own secrets.", rating:8},
  { title:'IP Man',trailer:"https://www.youtube.com/watch?v=RBYbqO_FUA4", img:'/image/IP Man.jpg', description:"During the Japanese invasion of China, a wealthy martial artist is forced to leave his home when his city is occupied. With little means of providing for themselves, Ip Man and the remaining members of the city must find a way to survive.", rating:6.9 },
  { title:'The Dark Knight',trailer:"https://www.youtube.com/watch?v=EXeTwQWrcwY", img:'/image/The Dark Knight.jpg', description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating:9 },
  { title:'Bad Moms',trailer:"https://www.youtube.com/watch?v=iKCw-kqo3cs", img:'/image/Bad Moms.jpg', description:"When three overworked and under-appreciated moms are pushed beyond their limits, they ditch their conventional responsibilities for a jolt of long overdue freedom, fun and comedic self-indulgence.", rating:6.2},
  { title:'Troy',trailer:"https://www.youtube.com/watch?v=znTLzRJimeY", img:'/image/Troy.jpg', description:"An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.", rating:7.3 },
  { title:'Wall E',trailer:"https://www.youtube.com/watch?v=CZ1CATNbXg0", img:'/image/Wall E.jpg', description:"In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.", rating:8.4 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
      <Routes>
       
        <Route path="/"  element={ <> <Filtring filter={filter}/>  <MovieList list={filtredList} /> <AddMovie adding={adding} />   </> } />
      
        <Route path="/:id" element={ <Description list={list} /> } />
      </Routes>
    </div>
      );
}

export default App;
