
import Cabecalho from "../../components/cabecalho"
import Rodape from "../../components/rodape"

import {Container} from './styled.js';

export default function EditarProduto(){
    return(
        <Container>
         <main>
             <div className="conteudo">
             <div class="body-right-box">
                            <div class="new-student-box">
                                
                                <div class="text-new-student">
                                    <div class="bar-new-student"></div>
                                    <div class="text-new-student"> Editar produto </div>
                                </div>

                                <div class="input-new-student"> 
                                    <div class="input-left">
                                        <div class="agp-input"> 
                                            <div class="name-product"> Nome: </div>  
                                            <input class="input" type="text" />
                                        </div> 
                                        <div class="agp-input">
                                            <div class="corse-product"> Preço: </div>  
                                            <input class="input" type="text" />
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-product"> Categoria: </div>  
                                            <input class="input" type="text"  /> 
                                        </div>
                                        <div class="agp-input">
                                            <div class="number-product"> Estoque: </div>  
                                            <input class="input" type="text"/> 
                                        </div>
                                        <div class="text">
                                          <div class="desc">Descrição:</div>
                                          <textarea class="descTextarea" type="text" ></textarea>
                                        </div>
                                    </div>                                  
                                    </div>
                                    <div className="input-right">
                                     <div class="agp-input" class="agp-img">
                                       <div class="img-product"> Imagem: </div>  
                                       <div class="img" type="text"/> 
                                     </div>
                                    </div>
                                     <div class="button-create"> <button> Salvar</button> </div>                             
                            </div>
                    </div>
                </div>
                </main>
        </Container>
    )
}