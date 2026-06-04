import ImageComponent from "./components/ImageComponent";
import VideoComponent from './components/VideoComponent';
import ParagraphsComponent from './components/ParagraphsComponent';
import ListsComponent from './components/ListsComponent';
import './App.css'

function App() {
  return (
    <div>
      <h1>React app</h1>
      <p>This is my first Homework!</p>
      <ImageComponent></ImageComponent>
      <VideoComponent></VideoComponent>
      <ParagraphsComponent></ParagraphsComponent>
      <ListsComponent></ListsComponent>
    </div>
  );
}

export default App;
