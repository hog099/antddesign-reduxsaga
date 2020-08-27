import styled from 'styled-components';



export const Container = styled.div`
  width: 100%;
  margin: 3px auto;

  display: flex;
  flex-direction: column;

    header{
        display: flex;
        align-self: center;
        align-items: center;

    button{
        border: 0;
        background: none;
    }

    strong{
        color: #fff;
        font-size: 24px;
        margin: 0 15px;
    }
    }


    ul{
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-gap: 15px;
     margin-top: 30px;   
    }

`;





export const ButtonAction = styled.button`
width: 60px;
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
