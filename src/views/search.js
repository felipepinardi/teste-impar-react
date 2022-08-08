import banner from '../assets/fundo-busca.png';
import lupa from '../assets/lupa.png';
import '../styles/search.css';

const Search = () =>  (
  <div>
      <img src={banner} alt="Banner" className="banner" />
      <div className="search-container">
        <input className='search-input' type="text" placeholder="Digite aqui sua busca..." maxLength={50} onChange={(text) => {
            
          }} />
        <button className='search-button'>
          <img src={lupa} alt="Procurar" />
        </button>
      </div>
    </div>
  )

export default Search;
