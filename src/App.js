import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {

  // let posts = [
  //   {id: 1, message: 'Hi, Dima',           likesCount: 12},
  //   {id: 2, message: 'It s my first post', likesCount: 10},
  //   {id: 3, message: 'It s my first', likesCount: 14},
  //   {id: 4, message: 'It s my', likesCount: 1},
  // ];

  return (
    <BrowserRouter> 
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' 
            render={ () => <Profile 
              profilePage={props.state.profilePage}
              dispath={props.dispath}
              />} 
          />
          <Route path='/dialogs' 
            render={ () => <Dialogs 
              state={props.state.dialogsPage} />} />
          
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;


// import logo from './logo.svg';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
