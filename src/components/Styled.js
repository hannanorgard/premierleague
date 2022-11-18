import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    background-color: #fff;
    margin: 0px auto;
    width: 100%;
  `,
  HeaderDiv: styled.div`
    text-align: center;
    margin-bottom: 5rem;
  `,
  Container: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 50rem;
    box-shadow: 2px 2px 2px lightpink;
    border-bottom: 1px solid black;
    border-right: 1px solid black;
    border-radius: 2rem;
    margin: 0px auto;
    text-align: center;
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
    flex: 0 0 calc(16.66% - 20px);
    padding: 1rem;
    margin: 1rem;
    border: 1px solid black;
    border-radius: 2rem;
  `,
  Link: styled.link`
    text-decoration: none;
  `
}