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
    margin: 0px auto;
    text-align: center;
    @media (max-width: 820px) {
      width: 80vw;
    }
  `,
  SingleSeasonContainer: styled.div`
    width: 70rem;
    display: grid;
    text-align: center;
    margin: 0px auto;
    @media (max-width: 820px) {
      width: 80vw;
    }
  `,
  TitleText: styled.h1`
    font-family: 'Montserrat', sans-serif;
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
  `,
  BtnContainer: styled.div`
    display: flex;
    justify-content: center;
  `,
  GoBackBtn: styled.button`
    border-bottom: 1px solid #000;
    border-top: none;
    border-right: none;
    border-left: none;
    background-color: #fff;
    width: 6rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
  `,
  Table: styled.table`
    border-collapse: collapse;
    border: 1px solid black;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 820px) {
      width: 100%;
    }
  `,
  TableHead: styled.th`
    border: 1px solid black;
    padding: 5px;
    font-family: 'Montserrat', sans-serif;
  `,
  TableHeadMobileView: styled.th`
    border: 1px solid black;
    padding: 5px;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 820px) {
      display: none;
    }
  `,
  TableData: styled.td`
    border: 1px solid black;
    padding: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
  `,
  TableDataMobileView: styled.td`
    border: 1px solid black;
    padding: 5px;
    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: ${(props) => (props.bold ? 'bold' : 'none')};
    @media (max-width: 820px) {
      display: none;
    }
  `
}