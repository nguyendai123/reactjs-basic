import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailUser extends React.Component {
    state ={
        user:{}
    }
    async componentDidMount(){
        if(this.props.match&&this.props.match.params){
        let id = this.props.match.params.id;
        let res = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log("chech res", res);
            this.setState({
            user: res && res.data && res.data.data ? res.data.data :{}
            })
            // console.log("chech user", res.data.data);
        }
    }
    handleBackButton= ()=>{
        this.props.history.push('/user');
    }
    render() {
        
        let { user} = this.state;
       
        let isEmptyObj = Object.keys(user).length === 0;
        console.log(isEmptyObj)
        return(
            <>
                <div>Hello detail{ this.props.match.params.id}</div>
                {isEmptyObj===false && 
                <>
                    <div>{user.first_name}-{user.last_name}</div>
                    <div>  {user.email}</div>
                    <div><img src={user.avatar}/></div>
                    <button type="button" style={{color:'red'}} onClick={()=>this.handleBackButton()}>Button</button>
                </>
                }
            
            
            </>
        
        )
    }

}
export default withRouter(DetailUser);