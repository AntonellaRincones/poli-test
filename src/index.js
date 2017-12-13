import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from "./rootReducer.js";
import { userLoggedIn } from "./actions/auth";

const store = createStore(
	rootReducer, 
	composeWithDevTools(applyMiddleware(thunk))
);

/*Mientras exista algo en el storage poligonosJWT
se mantiene abierta la sesion de usuario*/
if(localStorage.poligonosJWT){
	const user = { token: localStorage.poligonosJWT};
	store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
	<BrowserRouter>
		<Provider store = {store}>
			<App />
		</Provider>
	</BrowserRouter>,
	 document.getElementById('root')
);
registerServiceWorker();
