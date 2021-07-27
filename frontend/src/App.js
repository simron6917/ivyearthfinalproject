import React from 'react'
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom'
// import { Container } from 'react-bootstrap'
// import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import LandingScreen from './screens/LandingScreen'
import AboutScreen from './screens/AboutScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import RecommendDetailScreen from './screens/RecommendDetailScreen'

import Recommend from './components/Recommend'


const App = () => {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
      <Route path='/' component={LandingScreen} exact />
    
      <main>
        {/* <Container> */}
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/about' component={AboutScreen} />

          <Route path='/profile' component={ProfileScreen} />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/bookmark/:id?' component={CartScreen} />
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/recommend'
            component={Recommend}
            exact
          />
          <Route path='/recommend/:id' component={RecommendDetailScreen} />

          {/* <Route path='/admin/product/:id/edit' component={ProductEditScreen} /> */}
          <Route path='/search/:keyword' component={HomeScreen} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={HomeScreen}
            exact
          />
          <Route path='/home' component={HomeScreen} exact />

        {/* </Container> */}
      </main>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
