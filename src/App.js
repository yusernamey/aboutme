import './styles.css';
import image from './profile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faHome, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="main">
      <div className="side">
        <img src={image} alt="profile" />
        <h1>Deivydas Paulikas</h1>
        <p>Electrical engineer</p>
        <ul>
          <li>
          <FontAwesomeIcon icon={faHome} size="2x"  color="white" />
          <p>Vilnius, Lithuania</p>
          </li>
          <li>
          <FontAwesomeIcon icon={faMobile} size="2x"  color="white" />
          <p>+37064547746</p>
          </li>
          <li>
          <FontAwesomeIcon icon={faEnvelope} size="2x"  color="white" />
          <p>deivydas.paulikas@gmail.com</p>
          </li>
          <li>
          <FontAwesomeIcon icon={faGithub} size="2x"  color="white" />
          <p>github.com/yusernamey</p>
          </li>
        </ul>
      </div>
      <div className="right-side">
        <h1>About me</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, aliquam aperiam? Aliquid, quam! Reprehenderit expedita earum perspiciatis nulla tenetur vero quis, voluptates alias omnis, sunt neque nisi reiciendis. Voluptatibus, quidem?</p>
      </div>
    </div>
  );
}

export default App;
