import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDevelopers } from './../actions/index';




class DisplayDevelopers extends Component{
  constructor(props){
    super(props);

    this.state = {
      hasDevs: false
    }
  }


getDevelopers(){
  this.props.getDevelopers()
  console.log(this.props.getDevelopers());
  this.setState({
    hasDevs: true
  })
}

renderDevs(){
  return (
    <div>
      {this.props.developers.data}
    </div>
  )
}


  render(){


    if(this.state.hasDevs === false){
    return (
      <div>
        hey there
        <button onClick={()=>this.getDevelopers()}>press</button>
      </div>
    )
  }else{
    return this.renderDevs()
  }
  }

}

function mapStateToProps(state){
  console.log(state.developers);
  return {
    developers: state.developers
  }
}

export default connect(mapStateToProps, { getDevelopers })(DisplayDevelopers)
