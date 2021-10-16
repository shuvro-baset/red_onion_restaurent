import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import About from './components/About/About'
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound'
import Registration from './components/Registration/Registration'
import initializeAuthentication from './Firebase/firebase.initialize';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';

initializeAuthentication();

function App() {
  return (
    <>
      <AuthProvider>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/about">
            <About></About>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route> 
        </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </>
  );
}

export default App;
