import styled from 'styled-components';

export const Container = styled.div`
background: #fff;
padding: 0 10px;
width: 100vw;

`;

export const LogoBrand = styled.img`
  width: 60px;
  height: 40px;
`;



export const OpenMenu = styled.button`
  display: none; 
  width: 20px;
  height: 20px;
  border-style: none;
  background-color: transparent;
  margin-left: -8%;
  margin-right: 5%;

  i{
      font-size: 22px;
      color: #28282898;
  }

  @media (max-width: 900px) {
  display: block; 
  }
`;



export const Content = styled.div`
    height: 64px;
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display: flex;
        align-items: center;

    img{
        margin-right: 20px;
        padding-right: 20px;
        border-right: 1px solid #eee;
    }

    a{
        font-weight: bold;
        color: #fb6f91;
        font-size: 18px;
    }

    }

    aside{
        display: flex;
        align-items: center;
    }


`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

    div{
        text-align: right;
        margin-right: 10px;

        strong{
            display: block;
            color: #333;
        }

        a{
            display: block;
            margin-top: 2px;
            font-size: 12px;
            color: #999;
        }

    }


    img{
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }



`;

export const SpanLogout = styled.span`
margin: 3px;
margin-left: 5px;
align-self: center;
`;

export const ButtonLogout = styled.button`
width: 40px;
height: 30px;
background-color: #fb6f91;
color: #ffffff;
border-style: none;
border-radius: 2px;
`;
