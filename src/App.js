import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from  './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  //onAuthStateChanged is a method that allows us to know when there is state change of the user in firbase project
  //its an open messaging system between our app and firebase.  Whenever user updates - sign in/signout- we are given that user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
//Attaches a listener for DocumentSnapshot events. 
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            console.log(this.state)
          })
        });
      } else {
        this.setState({
          currentUser: userAuth
        })
      }   
    });
  }
//unsubscribe when component unmounts to prevent memory leaks
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
