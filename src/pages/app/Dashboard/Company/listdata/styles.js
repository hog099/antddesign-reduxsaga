import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: auto;
  padding-right: 30px;

  @media (max-width: 900px) {
  .thnone{
    display: none;
  }
  }

`;

export const Title = styled.p`
color: #28282898;
font-size: 20px;

@media (max-width: 980px) {
font-size: 16px;
  }
`;


export const DividerHeader = styled.hr`
width: auto;
`;


export const ButtonAction = styled.button`
width: 35px;
height: 18px;
border-style: none;
background-color: transparent;
margin-left: -8%;
margin-right: 5%;
color: ${props=>props.color}

i{
 font-size: 18px;
 /* color: #28282898; */
}
`;

export const ContainerSearch = styled.div`
height: 50px;
width: 100%;
`;

export const InputSearch = styled.input`
background: #ffffff;
border: 0;
border-radius: 4px;
height: 30px;
width: 60%;
padding: 0 15px;
color: #6e6e6e;
margin: 0 0 10px;
/* border-width: 0.3px;
border-color: #6e6e6e40; */


&::placeholder{
  color: #6e6e6e80;
}
`;



export const SpanLoading = styled.p`
text-align: center;

`;



