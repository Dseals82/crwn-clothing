import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from  './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import { auth } from './firebase/firebase.utils'; 






class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser} />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
        <Route path='/shop' element={<ShopPage />} />
       </Routes>
      </div>
    );
  }
}

export default App;
