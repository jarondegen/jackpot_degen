import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar'
import LogInForm from './components/LogInForm';
import Dashboard from './components/Dashboard';
import SignUpForm from './components/SignUpForm';
import AboutPage from './components/AboutPage';
import UserSuccess from './components/UserSuccess';
import CardRoomDetails from './components/CardRoomDetails';
import CardRooms from './components/CardRooms';
import Footer from './components/Footer';
import OddsCalc from './components/OddsCalc';

function App() {
  const { id } = useSelector(state => state.Auth)

  return (
      <>
        <BrowserRouter >
            {id && <NavBar />}
            <Switch>
                <Route exact={true} path={`/users/new`}>
                    <SignUpForm />
                </Route>
                <Route path="/login">
                    {id ?
                        <Redirect to={`/dashboard/${id}`} />
                        : 
                        <LogInForm />
                    }
                </Route>
            </Switch>
            <Switch>
                <Route path="/about" component={AboutPage} />
                <Route path="/odds" component={OddsCalc} />
                <Route path={`/dashboard/${id}`}>
                    <Dashboard />
                </Route>
                <Route path={`/users/success`}>
                    <UserSuccess />
                </Route>
                <Route path={`/cardrooms/:id(\\d+)`} component={CardRoomDetails} />
                <Route path={`/cardrooms`} component={CardRooms} />
                <Route exact={true} path="/">
                    {!id ? 
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
