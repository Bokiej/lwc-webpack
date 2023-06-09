import { LightningElement } from "lwc";
import homeIconUrl from '../../../../node_modules/@salesforce-ux/design-system/assets/icons/utility/home.svg';
export default class App extends LightningElement {
    title = 'Hello World';
    paragraph = 'This is simple page written in LWC and builded with Webpack';

    get homeIconUrl() {
        return homeIconUrl
    }

    handleClick(event) {
        alert('click!')
    }
}