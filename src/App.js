import './styles.css';
import image from './profile.jpeg'

function App() {
  return (
    <div className="main">
      <div className="side">
        <img src={image} alt="profile" />
        <h1>Deivydas Paulikas</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, debitis?</p>
      </div>
    </div>
  );
}

export default App;
