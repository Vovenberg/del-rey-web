import React, { Component } from "react";
import {Route, Switch, NavLink, Link} from "react-router-dom";
import ClientAccountPage from "./components/ClientAccountPage.jsx";
import HomePage from "./components/HomePage.jsx";
import ContactsPage from "./components/ContactsPage.jsx";
import AdminAccountPage from "./components/AdminAccountPage.jsx";
import { LoginPage } from "./components/LoginPage.jsx";
import styles from "./myapp.module.css"
import { House, Telephone, Signpost2, Pen } from 'react-bootstrap-icons';


class App extends Component {

  render() {
    return <div className="container">

      <div className={styles.header}>
        <h3 class="d-inline-block text-muted">Cosmetolog Luba Del Rey</h3>

        <nav class="navbar-expand-lg navbar-light d-flex">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
        
              <Link class="nav-link" activeClassName ="nav-link active" to="/"> <Signpost2/> Главная</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" activeClassName ="nav-link active" to="/contacts"> <Telephone/> Контакты</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" activeClassName ="nav-link active" to="/contacts"> Отзывы клиентов</Link>
            </li>
          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" activeClassName ="nav-link active" to="/"> <Pen/> Записаться на прием</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" activeClassName ="nav-link active" to="/login"> <House/> Личный кабинет</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.container_internal}>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/contacts' component={ContactsPage} />
          <Route path='/client' component={ClientAccountPage} />
          <Route path='/admin' component={AdminAccountPage} />
        </Switch>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2020 KillVldmr, Inc.</p>
      </footer>
    </div>
  }
}

export default App