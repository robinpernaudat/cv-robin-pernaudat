require('bootstrap');

const style = {
  width: "32rem",
  maxWidth: "800px",
  //minHeight: "200px",
  border: 'solid 1px #100010',
  color: "rgb(239, 241, 241)",
  boxShadow: '7px 5px 5px #100010',
  //padding: "5px",
  //margin: "0px",
  //display: 'flex',
  //position: 'relative',

};

export default class LeftCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    return (<div className="card xd-3" style={style}>
      <div className="row g-0">
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title" style={{ textDecoration: 'underline', }}>
              Robin PERNAUDAT
            </h5>
            <p class="card-text">
              <li>06.33.55.28.73</li>
              <li>robin@pernaudat.com</li>
              <li>330 allée des blés d'or</li>
              <li>01310 BUELLAS</li>
              <br />
              <li>25 janvier 1986</li>
              <li>Permis B</li>
            </p>
          </div>
        </div>
        <div className="col-md-4" >
          <img className="img-fluid rounded-start" style={{ height: "225px", }} src="images/portrait vert2_short.JPG" />
          </div>
      </div>
    </div>);
  }
}