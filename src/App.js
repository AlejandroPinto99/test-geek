import Test from './Components/Test'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className="">
      <h1 className="text-center font-bold p-5 bg-blue-400 shadow-lg text-4xl">Test pour verifier ton niveau du Geek </h1>
      <p className="text-2xl font-bold ml-5 mt-2">Repondez!:</p>
      <div>
        <Test />
        <Footer />
      </div>
    </div>
  );
}

export default App;
