import Head from './Head';
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<Head/>);}
}

const domContainer = document.querySelector('html > body');ReactDOM.render(<App/>, domContainer);