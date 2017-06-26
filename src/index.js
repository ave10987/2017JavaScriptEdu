import '../css/index.css';

import Store from '../store/store.js';
import Controller from '../controller/controller.js';
import View from '../view/view.js';
import Dispatcher from '../util/dispatcher.js';

const store = new Store();
const dispatcher = new Dispatcher();
const controller = new Controller();
const view = new View();