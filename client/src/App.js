import logo from './logo.svg';
import './App.css';
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider ,createHttpLink,} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Login  from "./pages/login";
import Register from "./pages/Register";
import Team from './pages/teams';
import Header from './components/Header';
import Footer from './components/Footer';
import Stripe from './pages/stripe';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  
  return (
      <ApolloProvider client={client}>
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Routes>
                <Route 
                  path="/" 
                  element={<Team />} 
                />
                {/* Create a route to display a single thought's comments based on its `thoughtId` provided in the URL */}
                <Route 
                  path="/login" 
                  element={<Login />} 
                />
                <Route 
                  path="/register" 
                  element={<Register />} 
                />
              </Routes>
                <Route
                path="/stripe"
                element={<Stripe/>}
                />
            </div>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
}

export default App;
