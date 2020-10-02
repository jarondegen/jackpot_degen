import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/SignUpForm';
import UserSuccess from './components/UserSuccess';
import CardRoomDetails from './components/CardRoomDetails';
import CardRooms from './components/CardRooms';
import Footer from './components/Footer';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       rest.needLogin === true
//         ? <Redirect to='/login' />
//         : <Component {...props} />
//     )} />
//   )


function App() {
  const { loggedIn, id } = useSelector(state => state.Auth)

  return (
      <>
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/login">
                    <LogInForm />
                </Route>
                <Route path={`/dashboard/${id}`}>
                    <Dashboard />
                </Route>
                <Route path={`/users/new`}>
                    <SignUpForm />
                </Route>
                <Route path={`/users/success`}>
                    <UserSuccess />
                </Route>
                <Route path={`/cardrooms/:id(\\d+)`} component={CardRoomDetails} />
                <Route path={`/cardrooms`} component={CardRooms} />
                <Route path="/">
                    {loggedIn ? 
                    <Redirect to="/login" />
                    :
                    <Redirect to={`/dashboard/${id}`} />
                    }
                </Route>
            </Switch>
        </BrowserRouter>
        <Footer />
    </>
  );
}

export default App;
