//import { useState } from 'react';

//import PropTypes from 'prop-types';

import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Article from './components/Article.jsx'
import Footer from './components/Footer.jsx'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'

function App() {

  return (
    <>
      <Header />
      <Nav />
      <main>
        <Article
          time="11/12/2020"
          blogHeading="On the Street in Brooklyn"
          imgSrc={image1}
          content="Cray ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio repellat accusantium, at officiis minus iusto labore. Velit saepe doloremque, minus exercitationem maiores optio soluta assumenda enim dolorum nemo quod perspiciatis ea porro numquam ab quas corrupti tempore quis dolore modi aut facilis et. Vero fugiat nobis, quaerat incidunt reprehenderit ut at iusto quod, id delectus possimus quibusdam ab? Dolorum consequuntur laborum eligendi rerum. Laudantium, animi omnis eligendi unde nemo architecto nisi est provident dicta distinctio incidunt, quisquam id tempore expedita cum dolorum vero temporibus sed necessitatibus quod praesentium itaque adipisci veritatis! Sint nobis quod porro, odio molestiae ab ut saepe magni quo ipsa cum est autem cumque dicta laborum ad voluptatum beatae rerum delectus aspernatur? Et ratione unde atque."
          link="#read-more-1"
        />
        <Article
          time="11/11/2020"
          blogHeading="Vintage in Vogue"
          imgSrc={image2}
          content="Selfies ipsum dolor sit amet consectetur adipisicing elit. Minima distinctio repellat accusantium, at officiis minus iusto labore. Velit saepe doloremque, minus exercitationem maiores optio soluta assumenda enim dolorum nemo quod perspiciatis ea porro numquam ab quas corrupti tempore quis dolore modi aut facilis et. Vero fugiat nobis, quaerat incidunt reprehenderit ut at iusto quod, id delectus possimus quibusdam ab? Dolorum consequuntur laborum eligendi rerum. Laudantium, animi omnis eligendi unde nemo architecto nisi est provident dicta distinctio incidunt, quisquam id tempore expedita cum dolorum vero temporibus sed necessitatibus quod praesentium itaque adipisci veritatis! Sint nobis quod porro, odio molestiae ab ut saepe magni quo ipsa cum est autem cumque dicta laborum ad voluptatum beatae rerum delectus aspernatur? Et ratione unde atque."
          link="#read-more-2"
        />
      </main>
      <Footer />
    </>
  )
}

export default App
