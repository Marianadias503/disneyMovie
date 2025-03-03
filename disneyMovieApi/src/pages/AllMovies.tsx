import imgDisney from '../assets/imgDisney.png';
import Card from '../components/card';

export default function allMovies(){
    return(
    <div className='bg-primary w-full h-full '>
    
    <div className='flex  p-8'>
    <img src={imgDisney} alt="" className='w-44 ' />
    <p className=' ml-10 pt-20 text-3xl font-bold'>Que bom ter você aqui,acompanhe todos os filmes e sua descrição </p>
    </div>
     <Card/>
    </div>
    )
}