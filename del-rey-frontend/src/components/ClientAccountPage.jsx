import React, { Component }  from 'react';
import {Route, Switch, Link, useRouteMatch} from "react-router-dom";

function ClientAccountPage() {

  let { path, url } = useRouteMatch();

  return <div class="d-flex flex-column">
    <h3 class="d-flex justify-content-center">Мой личный кабинет</h3>
    <div class="d-flex flex-row">
        <nav class="navbar-light">
          <ul class="navbar-nav flex-column">
            <li class="nav-item"><Link class="nav-link" activeClassName="nav-link active" to={`${url}`}> Главная</Link></li>
            <li class="nav-item"><Link class="nav-link" activeClassName="nav-link active" to={`${url}/recomended`}> Рекомендованные средства</Link></li>
            <li class="nav-item"><Link class="nav-link" activeClassName="nav-link active" to={`${url}/feedback`}> Оставить отзыв</Link></li>
            <li class="nav-item"><Link class="nav-link" activeClassName="nav-link active" to={`${url}/history`}> История посещений</Link></li>
          </ul>
        </nav>
      <div class="mx-3 my-3">
        <Switch>
          <Route exact path={`${path}`}> <MainPage /> </Route>
          <Route path={`${path}/recomended`}> <RecomendedPage /> </Route>
          <Route path={`${path}/feedback`}> <FeedbackPage /> </Route>
          <Route path={`${path}/history`}> <SeansHistoryPage /> </Route>
        </Switch>
      </div>
    </div>
  </div>
}


function MainPage() {
  return <div class="d-flex flex-column">
    <NextSeans seans="10.10.2020 19:00" />
    <ActualTreatment treatment="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." />
  </div>
}

function NextSeans(props) {
  return <div class="my-2 jumbotron">
      <h4>Мой следующий сеанс:</h4>
      <a>{props.seans}</a>
    </div>
}

function ActualTreatment(props) {
  return <div class="my-2 jumbotron">
      <h4>Мое текущее лечение:</h4>
      <a>{props.treatment}</a>
    </div>
}

function RecomendedPage() {
  return <div>
      <a>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</a>
  </div>
}

function FeedbackPage() {
  return <div>
      <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
}

function SeansHistoryPage() {
  return <div>
    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
}

export default ClientAccountPage