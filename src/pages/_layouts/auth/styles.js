import styled from 'styled-components';
import {darken} from 'polished';

export const Wrapper = styled.div`
  height: 100vh;
  /* background: linear-gradient(180deg, #F7732B, #FF4E62, #FF3B79, #951A7C); */
  background: linear-gradient(180deg, #F7732B, #FF4E62, #FF3B79);
  /* background-color: #f4f6f9; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  .logologin {
    width: 80px;
    height: 80px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input{
      background: #f5f5f5;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #6e6e6e;
      margin: 0 0 10px;
      /* border-width: 0.3px;
      border-color: #6e6e6e40; */

      &::placeholder{
        color: #6e6e6e80;
      }

      span{
        color: #fb6f91;
        align-self: flex-start;
        margin: 0 0 10px;
        font-weight: bold;
      }

    }

    button{
      margin: 5px 0 0;
      height: 44px;
      width: 100%;
      /* background: ${props=>props.color ? props.color : '#3b9eff'}; */
      font-weight: bold;
      color: #fff;
      border: 0;
      padding: 2%;
      border-radius: 4px;
      font-size: 12px;
      transition: background 0.2s;

      &:hover{
        background: ${darken(0.03, '#f10f24')}
      }
    }

    a{
      color: #6e6e6e;
      margin-top: 15px;
      margin-left: 15px;
      font-size: 16px;
      opacity: 0.8;
      text-decoration: none;

      &:hover{
        opacity: 1;
      }

    }


  }

`;
