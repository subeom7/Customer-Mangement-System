import './App.css';
import Customer from './components/Customer';
import React, { Component }  from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell'; 
import { withStyles } from '@mui/styles';



const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(3),
    overFlowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})

class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render(){
    const {classes} = this.props; 
    return (
      <Paper className={classes.root}>
        <Table classname={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Birthday</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        {this.state.customers ? 
        this.state.customers.map(c => {return (<Customer key={c.id} id ={c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>);
        }) : "no data"}  
        </TableBody>     
        </Table>
      </Paper>
    );
  }

}

export default withStyles(styles)(App);
