import Slider from "./Slider";

function App() {
  const images = [
    'https://source.unsplash.com/random/1920x960?random=1',
    'https://source.unsplash.com/random/1920x960?random=2',
    'https://source.unsplash.com/random/1920x960?random=3',
  ]

  return (
    <div>
      <Slider images={images} />
    </div>
  );
}

export default App;
