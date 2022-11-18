import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Styled } from './Styled';

const SingleSeason = () => {
  const { season } = useParams();
  console.log(season)
  const navigate = useNavigate();
  const [singleSeason, SetSingleSeason] = useState([]);
  console.log(singleSeason);

  useEffect(() => {
    fetch(`https://express-api-starter-gbwwjj3hgq-lz.a.run.app/season/${season}`)
      .then((res) => res.json())
      .then((data) => SetSingleSeason(data.uniqueseason))
      .catch((error) => console.log(error))
  }, [season]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <div>
      <Styled.SingleSeasonContainer>
        <Styled.TitleText>PREMIER LEAGUE STATS</Styled.TitleText>
        <Styled.SecondTitle>Season {season}</Styled.SecondTitle>
        <Styled.Table>
          <tr>
            <Styled.TableHead>Position</Styled.TableHead>
            <Styled.TableHead>Team</Styled.TableHead>
            <Styled.TableHeadMobileView>Won</Styled.TableHeadMobileView>
            <Styled.TableHeadMobileView>Lost</Styled.TableHeadMobileView>
            <Styled.TableHeadMobileView>Drew</Styled.TableHeadMobileView>
            <Styled.TableHeadMobileView>GD</Styled.TableHeadMobileView>
            <Styled.TableHead>Points</Styled.TableHead>
            <Styled.TableHeadMobileView>Qualification or relegation</Styled.TableHeadMobileView>
          </tr>
          {singleSeason.map((item) => (
            <tr>
              <Styled.TableData>
                {item.Pos}
              </Styled.TableData>
              <Styled.TableData bold>
                {item.Team}
              </Styled.TableData>
              <Styled.TableDataMobileView>
                {item.W}
              </Styled.TableDataMobileView>
              <Styled.TableDataMobileView>
                {item.L}
              </Styled.TableDataMobileView>
              <Styled.TableDataMobileView>
                {item.D}
              </Styled.TableDataMobileView>
              <Styled.TableDataMobileView>
                {item.GD}
              </Styled.TableDataMobileView>
              <Styled.TableData bold>
                {item.Pts}
              </Styled.TableData>
              <Styled.TableDataMobileView>
                {item.Qualification}
              </Styled.TableDataMobileView>
            </tr>
          ))}
        </Styled.Table>
      </Styled.SingleSeasonContainer>
      <Styled.BtnContainer>
        <Styled.GoBackBtn type="button" onClick={goBack}>Go back</Styled.GoBackBtn>
      </Styled.BtnContainer>
    </div>
  )
}

export default SingleSeason;