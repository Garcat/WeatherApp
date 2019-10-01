import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';

class Signup extends Component{
  constructor(...args){
    super(...args);

    this.state={
      fields: new Map(),
      showInfo: false,
      info:''
    } 
  }

  getForm(){
    return this.refs.form1;
  }

  closeInfo(){
    this.setState({showInfo: false});  
  }

  getInfoStyle=()=> 
    this.state.showInfo ? 'block' : 'none'; 

  handleFieldChange(e){
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    let ar = this.state.fields;    
    ar.set(e.target.name);  
    this.setState({
      [name]: value,
      fields: ar,
      showInfo: false
    });    
  }

  handleSubmit(e){
    e.preventDefault();    
    console.log("Submitted");
    console.log(this.state);           

    let form1= new FormData( this.getForm() );
    let str='';
    for (let pair of form1) {
      console.log(`${pair[0]}: ${pair[1]}`);      
      str += `${pair[0]}: ${pair[1]}/`;      
    }
    this.setState({
      showInfo: true,
      info: str
    });         
    
    this.clearForm();
  }

  clearForm(e){
    for (let key of this.state.fields.keys()) {
      this.setState({ [key]: null});
    }    
    this.setState({fields: new Map()});
    this.getForm().reset();    
  }

  render(){
    let defaultValue = this.props.defaultValue || {};
    return(
      <div>
        <div ref="info" style={{display:this.getInfoStyle()}} className="alert alert-success alert-dismissible">
          <button type="button" className="close" onClick={this.closeInfo.bind(this)}>&times;</button>
          <strong>Submitted: </strong> {this.state.info}
        </div>

        <div className='panel panel-default dialog'>
          <div className="panel-heading">
            <h2 className="panel-title">{this.props.title || 'Sign Up'}</h2>
          </div> 
          <div className="panel-body">
            <form ref='form1' onSubmit={this.handleSubmit.bind(this)}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" defaultValue={defaultValue.username} className="form-control" 
                  value={this.state.username || ''} onChange={this.handleFieldChange.bind(this)} />              
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" defaultValue={defaultValue.password} value={this.state.password || ''}
                  className="form-control" onChange={this.handleFieldChange.bind(this)}/>              
              </div>
              <div className="form-group">
                <label htmlFor="password2">Retype password</label>
                <input type="password" name="password2" className="form-control" 
                  onChange={this.handleFieldChange.bind(this)} />              
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" defaultValue={defaultValue.email} value={this.state.email || ''}
                  className="form-control" onChange={this.handleFieldChange.bind(this)}/>              
              </div>
              <div className="form-group">
                <label htmlFor="City">City</label>
                <select className="form-control" name="city" id="city" 
                  value={this.state.city || ''} onChange={this.handleFieldChange.bind(this)}>
                  <option value="-1">---</option>
                  <option value="Sydney">Sydney</option>
                  <option value="Melbourne">Melbourne</option>
                  <option value="Brisbane">Brisbane</option>
                </select>             
              </div>
              <div className="form-group">
                <button className='btn btn-primary' onClick={this.props.onSubmit} id='submit'>Sign Up</button>
                <button className='btn btn-default' onClick={this.clearForm.bind(this)} type='button'>Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Signup;