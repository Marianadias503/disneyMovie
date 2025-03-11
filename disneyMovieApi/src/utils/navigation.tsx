import { useNavigate } from 'react-router-dom';

// Hook  para navegação
export const useNavigation = () => {
  const navigate = useNavigate();

  // navegação para a página AllMovies
  const navigateToAllMovies = () => {
    navigate("/allmovies");
  };

  //  avegação para a página Pokemon
  const navigateToPokemon = () => {
    navigate("/Pokemon");
  };

  return { navigateToAllMovies, navigateToPokemon };
};
