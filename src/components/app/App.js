import React, {Component} from 'react'
import './App.css';
import Header from '../../layout/header/'
import Footer from '../../layout/footer'
import Main from '../../layout/main'

export default class App extends Component {

    render(){
        return (
            <>
                <Header />
                <Main/>
                <Footer />
            </>
        );
    }
}

