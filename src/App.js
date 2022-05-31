import './composants/entete'
import Entete from './composants/entete';
import Carousel from './composants/carousel'

function App() {
  return (
    <div className="App">
      <Entete/>
      <div className='CorpsAccueil'>
        <Carousel/>
        <div>
          <p>
          Bienvenue dans chroflix, postez et lisez des
          chroniques autant que vous voulez
          </p>
        </div>
      </div>
      <h2 > Le corps de l'élément</h2>

    </div>
  );
}


export default App;
