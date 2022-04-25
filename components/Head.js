export default class Head extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<span style={{margin: '0px auto 0px auto '}}>
      <h1>Robin PERNAUDAT</h1>
      <div><i style={{margin: '0px auto 0px auto '}}>Ingénieur en informatique et robotique.</i></div></span>);}
}