import SearchBar from './SearchBar/SearchBar.jsx'
import style from "./Nav.module.css"
import { Link } from 'react-router-dom';



export default function Nav(props) {

      
      return (
         <div className={style.container}>
         <Link to = "/about">
         <p> About </p></Link>
          

         <Link to = "/home">
         <p> Home </p></Link>

         <Link to = "/favorites">
         <p> Favorites </p></Link>

         <Link to = "/">
         <p> Logout </p></Link>

          <SearchBar  onSearch={props.onSearch}/>
       </div>
    );
   }
 