import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import ContainerWrapper from './components/ContainerWrapper/ContainerWrapper'

import './App.css'
import MainTable from './components/MainTable/MainTable'
import CryptoPage from './pages/CryptoPage/CryptoPage'

function App({ match }) {
  console.log(match)
  return (
    <BrowserRouter>
<ContainerWrapper>
    <Switch>
      <Route path="/" exact component={MainTable} />
      <Route path="/:name/:id" exact component={CryptoPage} />
    </Switch>
</ContainerWrapper>
    </BrowserRouter>
  )
};

App.propTypes = {
  match: PropTypes.object.isRequired
}

export default App
