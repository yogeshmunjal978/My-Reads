import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class find extends Component {
    render(){
        return(
            <div className="open-search">
              <Link to={"/find"}><button>Add a book</button></Link>
            </div>
        )
    }
}