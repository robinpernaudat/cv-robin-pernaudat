
const style={
   marginTop: '150px',
   marginBottom: '150px',
};

export default class Motivation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<div style={style}>
        <p>Bonjour,</p>
      <p>Mon CV est en cours de rédaction, revenez plus tard !</p>
      <p>Merci.</p>
      </div>);}
}