import React,{Component} from 'react';
import Books from './books'
class shelves extends Component{
    render(){
        return(<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
        
            {this.props.bookdisp && this.props.bookdisp.map(book=><Books key={book.id} {...book} changeShelf = {this.props.changeShelf} />)}
          </ol>
        </div>
      </div>)
    }
}

export default shelves