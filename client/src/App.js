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
const customers = [{
  'id': 1,
  'image': 'https://xsgames.co/randomusers/avatar.php?g=pixel',
  'name': 'Justin',
  'birthday': '1/1/2002',
  'gender': 'male',
  'job': 'Software Engineer'
},
{
  'id': 2,
  'image': 'https://xsgames.co/randomusers/assets/avatars/pixel/24.jpg',
  'name': 'Issac',
  'birthday': '4/3/1999',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 3,
  'image': 'https://xsgames.co/randomusers/assets/avatars/pixel/33.jpg',
  'name': 'Olivia',
  'birthday': '5/3/2003',
  'gender': 'Female',
  'job': 'Designer'
}]

class App extends Component {
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
        {customers.map(c => {return (<Customer key={c.id} id ={c.id} image = {c.image} name = {c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)})}  
        </TableBody>     
        </Table>
      </Paper>
    );
  }

}

export default withStyles(styles)(App);
