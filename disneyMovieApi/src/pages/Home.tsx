import mickeyHome from '../assets/mickeyHome.png';
import Card from '../components/card';
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/allmovies"); // Caminho da rota para a página AllMovies
  };
  return (
    <div className="bg-primary w-full h-auto ">

    <div className= "pt-10 flex justify-center items-center gap-10 border ">
      
      <div className=" w-2/4 flex flex-col gap-3 p-5">
        <h1 className="font-serif text-4xl text-[#401EFF] font-black">
          Disney´s Movie List
        </h1>
        <p className="text-white">
          Uma plataforma para acompanhar todos os filmes da plataforma Disney, com a descrição de cada filme em um único lugar.
          Faça seu login para ver a exibição completa e a descrição.
        </p>
        <button className="bg-white text-[#401EFF] rounded-2xl w-1/2" type="submit" onClick={handleNavigation}>
          Lista completa
        </button>
      </div>

   
      <div className=" justify-center">
        <img src={mickeyHome} alt="Mickey" className="w-56 " />
      </div>
    
    </div>
    <Card/>
    </div>
  );
}
