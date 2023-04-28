import React from "react";
import { withRouter } from "react-router";
class Mycomponent extends React.Component {
    state ={
        fname:'',
        lname:'',
    }
    // componentDidMount() {
       
    //        this.props.history.push('/todo')
       
    // }
    handleOnChangeName = (event) => {
        this.setState({
            fname: event.target.value
        });
    }
    handleOnChangelName = (event) => {
        this.setState({
            lname: event.target.value
        });
    }
    handleSubmit= (e)=>{
        e.preventDefault()
        console.log(this.state)
        this.props.history.push('/todo')
    }
    render() {
      
        return(
             <>
                <form>
                    <label htmlFor = "fname">firt name</label><br/>
                    <input type="text" value={this.state.fname} onChange={this.handleOnChangeName}></input><br/>
                    <label htmlFor = "lname">last name</label><br/>
                    <input type="text" value={this.state.lname} onChange={this.handleOnChangelName}></input><br/>
                    <input type="submit" value="Submit" onClick={this.handleSubmit}/><br/>
                </form>
            
            </>
        )
    }
}
export default withRouter(Mycomponent);