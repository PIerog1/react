import logo from './logo.svg';
import './App.css';
import DefaultValue from './components/71';
import DefaultValue2 from './components/72.jsx';
import HandleIncrement from './components/counter.jsx';
import Counter2 from './components/9-licznik.jsx';
import ThemeSwitcher1 from './components/ThemeSwitcher1.jsx';
import Alert from './components/KlasaAlert.jsx';
import Card from './components/card.jsx';
import Przycisk from './components/DoubleClick.jsx'
import Przycisk1 from './components/ButtonSize.jsx';
import Alert1 from './components/AlertClose.jsx';
import Alert3 from './components/ColorAlert.jsx';
import DefaultValue from './components/71';
import DefaultValue2 from './components/72.jsx';

function App() {
  return (
    <>
    <h2>Zadanie 7.1</h2>
    <DefaultValue></DefaultValue>
    <h2>Zadanie 7.2</h2>
    <DefaultValue2></DefaultValue2>
    <h2>Zadanie 9.1</h2>
    <Counter2></Counter2>
    <h2>Zadanie 9.2</h2>
    <ThemeSwitcher1/>
    <h2>zadanie 10.1</h2>
    <Alert>To jest bład!</Alert>
    <h1>Zadanie 10.2</h1>
    <Card>
      <h2>Nagłowek karty</h2>
      <p>To jest zawartosc karty</p>
    </Card>
    <h2>Zadanie 12.1</h2>
    <Przycisk></Przycisk>
    <h2>Zadanie 12.2</h2>
    <Przycisk1></Przycisk1>
    <h2>Zadanie 13.1</h2>
    <Alert1></Alert1>
    <h2>zadanie 13.2</h2>
    <Alert3></Alert3>
    </>
  );
}

export default App;
