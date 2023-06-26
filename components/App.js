import Head from './Head';
import LeftCard from './LeftCard';
import Motivation from './Motivation';

const l_style = {
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '10px',
  maxWidth: '1024px',
  backgroundColor: 'rgb(1, 93, 129)',
  borderRadius: "25px",
  color: "rgb(239, 241, 241)",

};
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    return (<div className="container-fluid" style={l_style}>
      <div class="row">
        <div class="col">
          <LeftCard />
        </div>
        <div class="col">
          <Head />
        </div>
      </div>

      <Motivation /></div>);
  }
}

const domContainer = document.querySelector('html > body'); ReactDOM.render(<App />, domContainer);