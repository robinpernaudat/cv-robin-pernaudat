
const style={
    width: "660px",
    minHeight: "200px",
    border: 'solid 1px #100010',
    color:'#100010',
    boxShadow: '7px 5px 5px #100010',
    padding: "5px",
    margin: "0px",
    display: 'flex',
    position: 'relative',
    
};

export default class LeftCard extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
    render(){return (<div style={style}><div>
      <h1 style={{margin: '0px',textDecoration: 'underline',}}>Robin PERNAUDAT</h1>
      <br/>
      <ul style={{listStyleType: 'none',}}>
      <li>06.33.55.28.73</li>
      <li>robin@pernaudat.com</li>
      <li>330 allée des blés d'or</li>
      <li>01310 BUELLAS</li>
      <br/>
      <li>25 janvier 1986</li>
      <li>Permis B</li>
      </ul>
      </div>
      <div style={{  position: "absolute", right: "5px", padding: '0px', margin :'0px',}}><img style={{height: "225px",}} src="images/portrait vert2_short.JPG"/></div>
      </div>);}
}