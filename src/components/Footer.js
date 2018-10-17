import React from "react";
import FooterContent from "./Footer/FooterContent";

const styles = {
    bottomContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'start',
        marginTop: '5px',
    }
};

export default class Footer extends React.Component {

    render(){

        return(
            <div style={styles.bottomContainer}>
                <FooterContent footercontent={this.props.footercontent} />                
            </div>
        )
    }
}