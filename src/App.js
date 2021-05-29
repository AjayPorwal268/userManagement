import bgimage from './images/bg1.jpg';
import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className = "logo">
          <img src={logo} alt="logo" width="100px"></img>
        </div>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#" className ="signup-btn">Sign Up</a></li>
          </ul>
        </div>
      </header>
      <main>
        <div className="content-left">
          <h1>Digital</h1>
          <h2>Marketing</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor erat, placerat vel neque sit amet, iaculis fringilla libero. Suspendisse varius, ex in porta bibendum, magna purus faucibus massa, vel fermentum dolor orci nec tortor. Suspendisse non auctor felis, in tempus tellus. Aenean at est sed elit molestie cursus non in odio. Aliquam mauris orci, facilisis a sodales quis, vestibulum ut leo. Quisque finibus lacinia metus mattis interdum. Vestibulum eget nulla efficitur, ultrices orci sit amet, vulputate nunc. Mauris et commodo erat, in lacinia lorem. Mauris ac diam nec nibh lobortis aliquet a eu tellus. Duis dignissim, mauris non porta posuere, erat lacus suscipit nisi, sed pretium sapien nibh tristique augue. Maecenas blandit luctus eros. Proin ut turpis scelerisque, commodo turpis in, molestie nisl. Maecenas libero nisl, ultrices in ipsum a, rutrum ultrices lacus. Maecenas sodales augue nec augue fringilla, eget lacinia risus congue. Vestibulum vitae sem tortor.</p>
          <button className="cta">Learn More</button>
        </div>

        <div className="content-right">
          <img src={bgimage} alt="" className="hero-img" />
        </div>
       
      </main>
    </div>
  );
}

export default App;
