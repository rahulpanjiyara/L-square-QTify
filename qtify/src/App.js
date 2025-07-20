//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Section from './components/Section/Section';
import AlbumCard from './components/AlbumCard/AlbumCard';
import SongSection from './components/Section/SongSection';

function App() {
  const topAlbumUrl = "https://qtify-backend-labs.crio.do/albums/top";
  const newAlbumUrl = " https://qtify-backend-labs.crio.do/albums/new";

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Section
        title="Top Albums"
        fetchUrl={topAlbumUrl}
        renderCard={(album) => <AlbumCard key={album.id} album={album} />}
      />
       <div className="hr"></div>
     
      <Section
        title="New Albums"
        fetchUrl={newAlbumUrl}
        renderCard={(album) => <AlbumCard key={album.id} album={album} />}
      />
      <div className="hr"></div>
      <SongSection/>
    </div>
  );
}

export default App;
