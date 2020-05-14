import React,{Component} from 'react';
export const MyContext = React.createContext();
export default class provider extends Component{
    constructor(){
        super();
        this.state={
            books:[],
            currentlyreading:[],
            read:[],
            wanttoread:[],
            appendBooks:books=>{
                const currentlyreading = books.filter(book=>book.shelf==="currentlyReading");
                const read = books.filter(book=>book.shelf==="read");
                const wanttoread = books.filter(book=>book.shelf==="wantToRead");
                this.setState({books,currentlyreading,read,wanttoread})

            },
            changeShelf:(book,newshelf,allshelf)=>{
                console.log(allshelf,newshelf)
                const newBooks = this.state.books.map(allBooks=>{
                    const foundID = allshelf[newshelf].find(
                        bookID => bookID === allBooks.id
                    );
                    if(foundID){
                        allBooks.shelf = newshelf;
                    }
                    return allBooks;
                })
                this.state.appendBooks(newBooks)
            }
        }
    }
    render(){
        return(
            <MyContext.Provider value={{...this.state}}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}