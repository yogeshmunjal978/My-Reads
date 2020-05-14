import React,{Component} from 'react';
import Shelves from '../component/shelves'
import Find from '../component/find'
import {getAll} from "../BooksAPI"
export default class land extends Component{
    async componentDidMount(){
        try{
        const books = await getAll();
        
        this.props.appendBooks(books)
        }catch(err){
            console.log(err)
        }
    }
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            
                <Shelves title="Currently Reading" bookdisp = {this.props.currentlyreading} changeShelf = {this.props.changeShelf}/>
                <Shelves title="Want to read" bookdisp = {this.props.wanttoread} changeShelf = {this.props.changeShelf}/>
                <Shelves title="Read" bookdisp = {this.props.read} changeShelf = {this.props.changeShelf}/>
              
            </div>
            <Find />
          </div>
        )
    }
}
