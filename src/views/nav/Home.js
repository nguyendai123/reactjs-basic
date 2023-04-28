import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from '../../assets/images/12qbv.jpg';
import {connect} from 'react-redux';
import {toast} from 'react-toastify'
// import {rootReducer} from '../../store/reducers/rootReducer'
class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //    this.props.history.push('/todo')
        // },3000)
    }
    handleDeleteUser = (user) => {
       
        this.props.deleteUserRedux(user);
        // toast.error("user deleted")

    }; 
    handleCreateUser = () =>{
        this.props.addUserRedux();
    } 
    
 render() {
    console.log("hello check",this.props)
    let listUsers = this.props.dataRedux;
    return (
        <>
        <div>Hello Home</div>
        <div>
            <img src={logo} style= {{width:'200px',height:'200px'}}></img>
        </div>
        <div>
            {listUsers && listUsers.length > 0 &&
             listUsers.map((item,index) =>{
                return(
                    <div key={item.id}>
                        {index+1}- {item.name} <span onClick={()=>{this.handleDeleteUser(item)}}>X</span>
                    </div>
                )
             })
            }
            <button onClick={()=>this.handleCreateUser()}>add new</button>
        </div>
        </>
        

    )
 }
};
const mapStateToProps = (state) => {
    return{
        dataRedux: state.users
    }
};
const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUserRedux : (userDelete) => dispatch({ type:'DELETE_USER', payload: userDelete}),
        addUserRedux : () => dispatch({ type:'CREATE_USER'})
    }
}

export default   connect(mapStateToProps,mapDispatchToProps)(Color(Home));