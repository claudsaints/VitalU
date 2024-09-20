import styled from "styled-components";

export const BtnStl = styled.button<BtnProps>`
  background-color: rgb(67, 170, 132);
  border: none;
  box-shadow: 0 3px 2px #1a1616b5;
  font-size: larger;
  font-weight: bold;
  color: white;
  text-align: center;
  height: ${({height})=>height?height:"auto"};
  width: ${({width})=>width?width:"auto"};
  border-radius: 5px;
  &:active{
    transform: scale(0.95); //diminui um pouco
    box-shadow: 0 1px 1px #1a1616b5; //diminiu para efeito de pressão
  }
  &:hover{
    cursor: pointer;
    color: #fff;
    text-decoration: none;
  }
`;

interface BtnProps{
  conteudo?: string;
  height?: string;
  width?: string;
  link?:string;
}

function Btn(props:BtnProps) {
  return (
    <>
      <a href={props.link}><BtnStl height={props.height} width={props.width}>{props.conteudo}</BtnStl></a>
    </>
  );
}

export default Btn;