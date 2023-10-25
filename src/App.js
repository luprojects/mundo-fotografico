import { Fotografico } from '../src/components/texto/Fotografico'
import { Titulo } from '../src/components/texto/Titulo'
import GaleriaCode from "./components/galery/GaleriaCode";
import { Logo } from './components/logo/Logo';
import Particless from './components/particles/Particless';
import Track from './components/sonido/Track'
function App() {
  return(<>
<div className='bg-mov'>
  <Logo />
<Track/>
<GaleriaCode />
<Titulo />
<Fotografico />
<Particless />
</div>
</>);
}
export default App;
