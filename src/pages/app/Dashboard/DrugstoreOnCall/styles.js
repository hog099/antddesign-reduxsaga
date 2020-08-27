import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  /* width: 90vw; */
  padding: 10px 15px 10px 15px;
`;

// export const Container = styled.div`
//   /* max-width: 600px; */
//   margin: 3px 30px 0px 30px;
//   display: flex;
//   flex-direction: column;
//   background-color: #ffffff;
// `;



export const ContainerSearch = styled.div`
margin: 0 auto;
width: 80%;
`;

export const InputSearch = styled.input`
background: #f5f5f5;
border: 0;
border-radius: 4px;
height: 30px;
width: 60%;
margin: 5px;
padding: 0 15px;
color: #6e6e6e;
margin: 0 0 10px;
/* border-width: 0.3px;
border-color: #6e6e6e40; */


&::placeholder{
  color: #6e6e6e80;
}
`;



export const ContainerTabs = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 100vh; */
  background-color: #ffffff;
  border-style: solid;
  border-width: 0.2px;
  border-color: #00000012;
  
`;


export const ItemTab = styled.button`
  background-color: #6e6e6e20;
  width: 150px;
  height: 30px;
  border-style: none none solid none;
  border-bottom-width: 5px;
  border-bottom-color: ${props=>props.color && props.color};
`;



export const TextItemTab = styled.p`
  text-align: center;
  font-size: 16px;
  color: #28282898;

  :hover{
  color: #282828;
  }
`;


export const ContainerTabPanel = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #ffffff;
  padding-top: 2%;
`;


export const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;




export const ContainerButtonMenu = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 30px;
  margin: 3px;
  border-radius: 2px;
  background-color: #1d7ee5;

  :hover{
  background-color: #007bff;
  }

  a{
    text-align: center;
    text-decoration: none;
    color: #ffffff;

    :hover{
    text-decoration: none;
    color: #ffffff;

    }
  }

`;

export const SubTitleSpan = styled.p`
  font-size: 10px;
  color: #1d7ee5;
  font-style: italic;
  margin: 0px 2px 0px 2px;
`;





