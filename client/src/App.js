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
import { CircularProgress } from '@mui/material';
// import { makeStyles } from '@mui/styles';




const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing(3),
    overFlowX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress:{
    // margin: theme.spacing.unit * 2
    
  }
})

//React Life Cycle

/*
1) construct()

2) componentWillMount()

3) render()

4) componentDidMount()

*/

/*

props or state => shouldComponentUpdate()

*/
class App extends Component {

  state = {
    customers: "",
    completed: 0
  }

  componentDidMount(){
    this.timer = setInterval(this.progess, 20);
    //comment out this part to test progress bar
    this.callApi()
      .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progess = () => {
    const {completed} = this.state;
    this.setState({completed: completed > 100 ? 0 : completed + 1});
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
        }) : 
        <TableRow>
          <TableCell colSpan="6" align="center">
            <CircularProgress className = {classes.progess} variant="determinate" value={this.state.completed}/>

          </TableCell>
        </TableRow>
        }  
        </TableBody>     
        </Table>
      </Paper>
    );
  }

}

export default withStyles(styles)(App);
