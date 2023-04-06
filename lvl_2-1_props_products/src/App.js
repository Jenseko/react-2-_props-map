import './App.css';
import './components/Produkte'
import Produkte from './components/Produkte';

const produktArr = [
  {
    img: <img src='https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg' alt='Bild1' />,
    Product: "cocooil",
    Price: "30 $",
    Description: "-good for skin care-"
  },
  {
    img: <img src='https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='Bild2' />,
    Product: "Polaroid",
    Price: "60 $",
    Description: "-preserve moments forever-"
  },
  {
    img: <img src='https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Bild3' />,
    Product: "cel body set",
    Price: "20 $",
    Description: "-make your skin and hair smoother-"
  }
]


function App() {
  return (
    <div className="App">
      <h1>Super Shop</h1>
      <img src="" alt="" />
      <section>
        <Produkte
          img={produktArr[0].img}
          Product={produktArr[0].Product}
          Price={produktArr[0].Price}
          Description={produktArr[0].Description}
        />
        <Produkte
          img={produktArr[1].img}
          Product={produktArr[1].Product}
          Price={produktArr[1].Price}
          Description={produktArr[1].Description}
        />
        <Produkte
          img={produktArr[2].img}
          Product={produktArr[2].Product}
          Price={produktArr[2].Price}
          Description={produktArr[2].Description}
        />
      </section>
    </div>
  );
}

export default App;
