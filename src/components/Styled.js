import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    background-color: #fff;
    margin: 0px auto;
    width: 100%;
  `,
  HeaderContainer: styled.div`
    margin-bottom: 5rem;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr;
  `,
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 14px;
    grid-row-gap: 14px;
    width: 50rem;
    box-shadow: 5px 5px 5px #000;
    margin: 0px auto;
  `,
  TitleText: styled.h1`
    font-family: 'Gazebo';
    font-size: 3rem;
  `,
  SecondTitle: styled.h2`
    font-family: 'Montserrat', sans-serif;
  `,
  Paragraph: styled.p`
    font-family: 'Montserrat', sans-serif;
  `,
  Link: styled.link`
    text-decoration: none;
  `
}