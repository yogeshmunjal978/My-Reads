import React,{Component} from 'react';
import {update} from '../BooksAPI'

export default class books extends Component{
    changer = async e =>{
      const shel = e.target.value;
      const b = this.props;
      const result = await update(b,shel)
      this.props.changeShelf(b,shel,result)
    }
    render(){
        return(<li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.imageLinks? this.props.imageLinks.thumbnail:""}")` }}></div>
                <div className="book-shelf-changer">
                  <select onChange={this.changer} value={this.props.shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{this.props.title}</div>
              <div className="book-authors">{this.props.authors ? this.props.authors[0]:"No Author"}</div>
            </div>
          </li>)
    }
}