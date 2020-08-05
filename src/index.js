import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/cadastro/video" component={CadastroVideo}/>
            <Route path="/cadastro/categoria" component={CadastroCategoria}/>
            <Route component={() => (<div>Página 4040</div>)} />
        </Switch>
    </BrowserRouter>,
    // <React.StrictMode >
    // <App />
    // </React.StrictMode > ,
    document.getElementById('root')
);