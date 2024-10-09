import { Link } from "react-router-dom";
import { BtnStl,FlexDivResp,StlInput,StlCaixa,LinhaSld,Logo,Message} from "../components/index";
import { useState } from "react";
import user from '../services/default'
export function Cadastro() {
  const [nome,setNome] = useState("");
  const [email,setEmail] = useState("");
  const [senha,setSenha] = useState("");
  const [mensagem,setMensagem] = useState("");
  

  const enviarDados = () =>{
    user.cadastro(nome,email,senha,setMensagem);    
  
  }


  return (
    <>
      <LinhaSld/>
      <StlCaixa height="90%" width='300px' radius="150px 150px 25px 25px" >
        <Logo height="50px" width="auto" />
        <h1 className="title_default">Cadastro</h1>
        <StlInput onChange={e => setNome(e.target.value)} type="text" height="40px" width="80%" placeholder="Nome"/>
        <StlInput onChange={e => setEmail(e.target.value)} type="email" height="40px" width="80%" placeholder="E-mail"/>
        <StlInput onChange={e => setSenha(e.target.value)} type="password" height="40px" width="80%" placeholder="Senha"/>
        <BtnStl onClick={enviarDados}  height="40px" width="80%">
          Cadastrar
          
        </BtnStl>
        <FlexDivResp>
          <Link to='/login'>Retornar ao login</Link>

        </FlexDivResp>
        <Message visible={mensagem? true : false} height="30px">
              {mensagem} 
        </Message>
      </StlCaixa>
    </>
  );
}

