import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class UserList extends Component{

    createListItems(){
        return this.props.users.map((user) => {
            return(
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first}, {user.last}

                </li>

            );

        });
    }

    render(){
      return(
          <ul>
              {this.createListItems()}
          </ul>
      );
    }
}



//take a part of the state and send it to the componenet as props
function mapStateToProps(state) {
    return {
        users:state.users
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectUser: selectUser},dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);