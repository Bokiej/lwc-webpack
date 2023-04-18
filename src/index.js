import './style.css'; // imports global styles

import { createElement } from 'lwc';
import App from 'pb/app';

const app = createElement('pb-app', { is: App });
const appContainer = document.getElementById('app');

appContainer.appendChild(app);