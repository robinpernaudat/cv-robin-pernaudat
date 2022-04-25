import Head from './Head';
import LeftCard from './LeftCard';
import Motivation from './Motivation';

const l_style={
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '10px',
  maxWidth: '1440px',
  backgroundColor: 'bisque',
  borderRadius: "25px",
  

};
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<div style={l_style}><div style={{display: 'flex',}}><LeftCard/><Head/></div>
    <Motivation/></div>);}
}

const domContainer = document.querySelector('html > body');ReactDOM.render(<App/>, domContainer);