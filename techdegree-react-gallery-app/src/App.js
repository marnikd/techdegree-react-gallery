import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import apiKey from './config.js'
import './css/index.css';

//Import of components
import PhotoList from './PhotoList.js'
import Search from './Search.js'
import Nav from './Nav.js'
import PageNotFound from './PageNotFound.js';

class App extends Component{

    constructor(){
        super();
        this.state = {
            photos: [],
            rugby:[],
            amsterdam:[],
            computers:[],
            loading: true
        };
    }
    
    componentDidMount(){
       this.searchPhoto();
        this.searchPhoto("rugby","rugby");
        this.searchPhoto("amsterdam","amsterdam");
        this.searchPhoto("computers","computers");
    }
    
    searchPhoto = (key ='photos', query = 'nature') => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
                [key]: response.data.photos.photo,
                loading: false
            });
        })
        .catch(error =>{
            console.log('Error fetching data', error);
        });
    }

    render(){
        return (
    <BrowserRouter>
    <div className="container">
         <Route exact path='/search' render = { ()=> <Search onSearch={this.searchPhoto}/>} />
         <Nav />
         
        
        <Switch>
            <Route exact path="/" render={ () => (this.state.loading)?<p>Loading...</p>:<PhotoList data={this.state.photos}/>}/>
            <Route exact path="/search" render={ () => (this.state.loading)?<p>Loading...</p>:<PhotoList data={this.state.photos}/>}/>
            <Route exact path="/rugby" render={ () => (this.state.loading)?<p>Loading...</p>:<PhotoList data={this.state.rugby}/>}/>
            <Route exact path="/amsterdam" render={ () => (this.state.loading)?<p>Loading...</p>:<PhotoList data={this.state.amsterdam}/>}/>
            <Route exact path="/computers" render={ () => (this.state.loading)?<p>Loading...</p>:<PhotoList data={this.state.computers}/>}/>
            <Route component={PageNotFound}/>
        </Switch>
         
    </div>
    </BrowserRouter>
        );
    }
}

export default App;