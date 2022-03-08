import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from  './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'; 
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null;

  //onAuthStateChanged is a method that allows us to know wh en there is state change of the user in firbase project
  //its an open messaging system between our app and firebase.  Whenever user updates - sign in/signout- we are given that user
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
//Attaches a listener for DocumentSnapshot events. 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } 
      setCurrentUser(userAuth);
    });
  }
//unsubscribe when component unmounts to prevent memory leaks
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
      <Header />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signin' element={<SignInAndSignUpPage />} />
        <Route path='/shop' element={<ShopPage />} />
       </Routes>
      </div>
    );
  }
}

const mapDispactchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispactchToProps)(App);
