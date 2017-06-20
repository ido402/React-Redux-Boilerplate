import React, {Component} from 'react';
import {connect} from 'react-redux';



class UserDetails extends Component{

    render(){
        if(!this.props.user){
            return(<h3>Select a user...</h3>);
        }

        return(
            <div>
               <img src={this.props.user.thumbnail}/>
                <h2>Name: {this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age} </h3>
                <h3>Description: {this.props.user.description}</h3>
            </div>
        );
    }
}

//take a part of the state and send it to the componenet as props
function mapStateToProps(state) {
    return {
        user:state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetails);
