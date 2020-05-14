
// import * as BooksAPI from './BooksAPI'

import React,{Component} from 'react';
import './App.css'
import Land from './view/land'
import Finda from './view/find'
import {Switch,Route} from 'react-router-dom';
import Provider, { MyContext } from './provider'
class BooksApp extends Component {

  render() {
    return (
      <div className="app">
        <Provider>
        <Switch>
          < Route exact path={"/"} render={()=>(
            <MyContext.Consumer>
              {context=><Land{...context} />  }
            </MyContext.Consumer>
          )} />
          < Route exact path={"/find"} render={()=>(
            <MyContext.Consumer>
              {context=><Finda{...context} />  }
            </MyContext.Consumer>
          )} />
          {/* < Route exact path ={"/find"} component={Finda} /> */}
        </Switch>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
