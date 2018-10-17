import React from "react";
import Title from "./Header/Title";

const styles = {
    topContainer:{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'start',
        marginTop: '5px',
    }
};

export default class Header extends React.Component {

    render(){

        return(
            <div style={styles.topContainer}>
                <Title title={this.props.title} />
            </div>
        )
    }
}