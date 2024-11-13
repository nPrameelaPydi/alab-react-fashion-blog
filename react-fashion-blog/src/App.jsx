import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Article />
        <Article />
      </main>
      <Footer />
    </>
  )
}

export default App
