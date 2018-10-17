import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default class Layout extends React.Component {
    constructor(){
        super();
        this.state = {
            title: 'Welcome',
            footercontent: 'By Lazara Michelle ~ Techlaunch.io Student'
        };
    }
    
 
    render(){
        
        return(
            <div>
                <Header title={this.state.title} />
                <Content />
                <Footer footercontent={this.state.footercontent} />
            </div>
        )
    }
}