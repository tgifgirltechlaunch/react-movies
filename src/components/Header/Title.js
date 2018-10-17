import React from "react";
const styles = {
    titlehead:{
        textTransform: 'capitalize'
    }
};
export default class Title extends React.Component {
   
    render(){
        
        return(
            <h1 style={styles.titlehead}>
                {this.props.title}
            </h1>
        );
    }
}