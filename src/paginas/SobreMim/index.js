import PostModelo from "componentes/PostModelo";
import FotoCapa from "assets/sobre_mim_foto.png"


export default function Inicio(){
  return (
    <PostModelo
    FotoCapa={FotoCapa}
    título="sobre mim"
    >
      <h3 >
                Olá, eu sou o Antônio!
            </h3>
            <img
                src={FotoCapa}
                alt="Foto do Antônio Evaldo sorrindo"
                
            />
    </PostModelo>
  )
}