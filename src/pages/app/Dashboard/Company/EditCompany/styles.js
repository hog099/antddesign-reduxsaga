import styled from 'styled-components';

export const Container = styled.div`
  height: auto;
  width: 100%;
  padding-right: 60px;
  padding-left: 10px;
`;

export const Title = styled.h3`
color: #28282898;
font-size: 20px;

@media (max-width: 900px) {
font-size: 14px;
  }
`;


export const DividerHeader = styled.hr`
width: auto;
`;


export const ButtonAction = styled.button`
width: 100%;
height: 40px;
border-style: none;
background-color: ${props=>props.color};
color: #ffffff !important;
border-radius: 3px;
margin-bottom: 40px;
/* font-size: 14px; */
`;

