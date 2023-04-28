import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
 
    Link,NavLink
  } from "react-router-dom";
class ListUser extends React.Component {
    state ={
        listUser:[]
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser:res && res.data && res.data.data ?  res.data.data : []
        })
            
    }
    handleViewDetailUser = (user) => {
      
         this.props.history.push(`/user/${user.id}`)
    };
    render() {
        let{listUser} = this.state
        return (
            <div>
                { listUser && listUser.length > 0 && 
                listUser.map((item,index)=>{
                return (
                <div key={item.id} onClick={()=> 
                    this.handleViewDetailUser(item)
                    
                }>
                    {index+1} - {item.first_name} - {item.last_name} 
                    <img src={item.avatar}/>
                </div>
                )
            })
            }
            </div>
        )
    }

}
export default withRouter(ListUser);