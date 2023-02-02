import './App.css';
import Customer from './components/Customer';
import { Component } from 'react';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'customer1',
  'birthday': '1/1/2002',
  'gender': 'male',
  'job': 'Software Engineer'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'customer2',
  'birthday': '4/3/1999',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'customer3',
  'birthday': '5/3/2003',
  'gender': 'Female',
  'job': 'Designer'
}]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer 
              key={c.id}
              id ={c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
              />
            ) 
          })
        }
      </div>
    );
  }

}

export default App;
