import { LightningElement } from "lwc";

export default class App extends LightningElement {
    title = 'Hello World';
    paragraph = 'This is simple page written in LWC and builded with Webpack';

    handleClick(event) {
        alert('click!')
    }
}