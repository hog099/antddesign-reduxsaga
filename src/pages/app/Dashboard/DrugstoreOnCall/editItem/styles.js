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



export const ContainerForm = styled.div`
    align-self: center;
    width: 80%;

    .checkboxstrap{
        margin: 0px 5px 0px 5px;
    }

    .selectmargin{
        margin: -6px 0px 0px 0px;
    }

    label{
        font-size: 12px;
        width: 100px;
    }
    .buttonform{
        margin-top: 10px;
    }

`;
