import styled, { css } from 'styled-components';
import rectangle from '../assets/Rectangle.png';
import rectangleTwo from '../assets/Rectangle_two.png';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  width: 100%;
   
  img {
    margin-left: 70px;
    height: 70px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 450px;
    height: 40px;

    margin-right: 40px;



    li {
      cursor: pointer;
      list-style: none;
      color: #252B42;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;

      &:hover {
        color: #FA4A0C;
      }
    }
  }
`;

export const ContainerInfoMail = styled.div`
  background-image: url(${rectangle});
  width: 100%;
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {

    color: #F7F7F7;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
  }

  h1 {
    color: #FFFFFF;
    text-align: center;
    font-weight: bold;
    font-size: 58px;
    line-height: 80px;

    width: 980px;
    height: 180px;
  }

  p {
    color: #F7F7F7;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
  }


  div {
    display: flex;
    margin-top: 48px;

    button {
      background: #FA4A0C;
      box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.5);
      border: none;
      border-radius: 30px;
      padding: 16px 0px;


      display: flex;
      align-items: center;
      justify-content: center;

      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;

      width: 200px;
      height: 50px;

    }

    button + button {
      border: 1px solid #FFFFFF;
      background-color: transparent;
      box-shadow: none;
      margin-left: 28px;
    }
  }
`; 


export const ContainerInfoFooter = styled.div`
  background-image: url(${rectangleTwo});

  height: 450px;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #F7F7F7;
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
  }

  h1 {
    color: #FFFFFF;
    text-align: center;
    font-weight: bold;
    font-size: 35px;
    line-height: 80px;
  }


  div {
    display: flex;
    margin-top: 48px;

    button {
      background: #FA4A0C;
      box-shadow: 0px 10px 30px rgba(183, 50, 39, 0.5);
      border: none;
      padding: 16px 0px;


      display: flex;
      align-items: center;
      justify-content: center;

      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;

      width: 142px;
      height: 60px;

    }

    button + button {
      border: 1px solid #FFFFFF;
      background-color: transparent;
      box-shadow: none;
      margin-left: 28px;
      width: 173px;
    }
  }
`; 

export const ImagePhone = styled.img`
  position: absolute;
  left: 350px;
  top: 470px;
  width: 450px;
`;

interface ContentProps {
  name?: string;
}

export const Content = styled.div<ContentProps>`

 
  ${props => props.name === 'phone-login' ? css`
    margin-top: 500px;
  ` : css`
    margin-top: 0px;
  `}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: #000;
    font-family: Poppins, sans-serif;
    font-weight: 600;
    font-size: 44px;
  }

  span::before {
    content: '';
    display: block;

    width: 900px;
    height: 0px;
    margin-bottom: 30px;
    border: 1px solid #E4E4E4;
  }

  section {
    display: flex;
    justify-content: flex-start;
    height: 500px;
    margin-top: 40px;

    img {
      height: 550px;
    }
  
  div {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2 {
      color: #FA4A0C;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;

      letter-spacing: 0.1px;
    }

    h3 {
      color: #252B42;
      font-weight: bold;
      font-size: 40px;
      line-height: 57px;
      letter-spacing: 0.2px;

      font-family: Montserrat, sans-serif;
      width: 561px;
      height: 134px;

      margin-top: 15px;
    }

    p {
      width: 467px;
      height: 96px;
      color: #737373;
      font-weight: 500;
      font-size: 24px;
      line-height: 38px;
      letter-spacing: 0.2px;
      font-family: Montserrat, sans-serif;
    }
  }

  }
`;

export const Footer = styled.footer`
  height: 133px;

  margin-top: 38px;
  margin-bottom: 40px;  
  padding: 0 70px;

  /* background-color: violet; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    width: 170px;
    height: 41px;
  }

  span {
    font-family: Roboto, sans-serif;
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    color: #5C5C5C;
    letter-spacing: 0.1px;
  }
`;