import styled from 'styled-components';

export const NavVertical = styled.div`
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  background: #3a4248;
  height: 100vw;
  padding-top: 1%;
  padding-bottom: 5px;

  hr{
    background-color: #ffffff90;
    opacity: 0.2;
    }

  @media (max-width: 900px) {
  /* display: ${props=>props.displayShow != 'block' ? 'none' : 'block'};  */
  /* display: none;  */
  width: 40px;
  height: auto;
  }
  a{
    text-decoration: none !important;
  }

 
`;

export const NavItemMaster = styled.div`
display: flex;
flex-direction: row;
align-items: center;
/* margin-top: 8px; */
height: 40px;
color: #ffffff;
padding-left: 5px;
padding-right: 5px;
border-bottom-style: solid;
border-bottom-width: 0.2px;
/* border-bottom-color: #6a7781; */
border-bottom-color: #ffffff98;
font-size: 12px;
cursor: pointer;

  span{
    display: none;
    z-index: 9;
  }

   i{
      margin-left: 10px;
      margin-top: -8px;
      width: 50px;
    }

    p{
      margin-left: -10%;
      margin-top: 8px;
    }

    :hover{
    background: #424b52;
    font-size: 14px;
    height: 40px;
    }

    @media (max-width: 900px) {
        font-size: 8px;
        width: 40px;
        padding: 0px !important;

        p{
          display: none;
        }


        i{
          font-size: 14px;
          /* margin: 0 auto; */
          width: 20px;
        }
          
        :hover{
          #asideitemname01, #asideitemname02, #asideitemname03{
          display: block;
          z-index: 9;
          margin-left: 30%;
          min-width: 200px;
          height: 40px;
          /* margin-top: -8%; */
          background-color: #ffffff;
          /* background-color: #fb6f91; */
          padding: 5px;

            a{
              text-decoration: none !important;
            }
            i{
              font-size: 14px;
              /* margin-left: 25%; */
              width: 20px;
            }
            p{
              display: block;
              margin-top: 5px;
              margin-left: 8%;
              text-decoration: none;
              font-size: 14px;
              color: #282828 !important;
            }

          }
        }

      }


`;

export const TextItemNav = styled.div`
/* text-align: center; */
text-decoration: none !important;
color: #dad6d6 !important;


`;