import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SearchAlbums from './components/SearchAlbums/SearchAlbums'
function App () {
  return (
    <div className="App">
      <Header />
      <SearchAlbums />
      <Footer />
    </div>
  )
}

export default App
