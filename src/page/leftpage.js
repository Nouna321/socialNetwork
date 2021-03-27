import React, {Component} from 'react';
import SimpleMenu from './simpleMenu' 



const leftpage = () => {
    return(
            <div className=" pt-6 translate-full">
              <div className="float-right">
              <SimpleMenu/>
              </div>
           <div className="ml-8">
             <h1> Nom de la page </h1> 
             <br/>
             <h1> l'email</h1>
             <br/>
             <p>la description</p>
             <br/>
             <h1> la date de sa creation</h1>
             <br/>
             <h1>nbr d'abonnée</h1>
             </div> 
      
</div> 
)}
export default leftpage;


