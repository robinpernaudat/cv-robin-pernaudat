
const style={
  textAlign: 'center',
  verticalAlign: 'middle',
  width: '60%',
  paddingTop: '90px',
};

export default class Head extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<div style={style}>
        <h1 style={{margin: "0px", verticalAlign: 'middle',}}>Ingénieur en informatique et robotique.</h1>
        <div style={{textAlign: 'center', verticalAlign: 'middle',}}><i >Chef de projet en informatique et robotique (Bac +5)</i></div>
      </div>);}
}