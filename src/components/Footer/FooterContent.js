import React from "react";
const styles = {
    footcontentstyle:{
        textTransform: 'capitalize'
    }
};
export default class FooterContent extends React.Component {
   
    render(){
        
        return(
            <h1 style={styles.footcontentstyle}>
                {this.props.footercontent}
            </h1>
        );
    }
}