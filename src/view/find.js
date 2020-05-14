import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {search} from "../BooksAPI"
import Books from "../component/books"
export default class find extends Component{
  constructor(props){
    super(props)
    this.state={
      q:"",
      books:[]
    }
  }
    changer = async e=>{
      try{
        const q = e.target.value;
        this.setState({q}) 
        if(q){
          const result = await search(q)
          if(result.error){
            this.setState({books:[]})
          }else{
            this.setState({books:result})
          }
        }else{
          this.setState({books:[]})
        }
      }catch(err){
        console.log(err)
      }
    
    }
    render(){
        return(
            
            <div className="search-books">
            <div className="search-books-bar">
              <Link to={"/"} className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={this.changer}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                
              {this.state.books.length>0 && this.state.books.map(book=>{
                    const foundShelf = this.props.books.find(
                      searchbook => searchbook.id === book.id
                    )
                    if(foundShelf){
                      book.shelf = foundShelf.shelf
                    }else{
                      book.shelf="none"
                    }
              return(
                
              <Books key={book.id} {...book} changeShelf = {this.props.changeShelf} />
              )
              })}
              {this.state.books.length === 0 && (
                <h1 style={{textAlign:"center"}}>No results Found</h1>
              )}
              </ol>
            </div>
          </div>
        ) 
        
    }
}
