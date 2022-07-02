import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Card from './components/cards';
import data from './data';

function App() {
  const cards=data.map(item=>{
    return (
      <Card
         key={item.id}
         item={item}
         />
    )
  })
  return (
    <div className="App">
      <Header/>
      <section className='cards-list'>
        {cards}
      </section>
    </div>
  );
}

export default App;
