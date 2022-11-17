import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Styled } from './Styled';

const Seasons = () => {
  const [seasonList, setSeasonList] = useState([]);
  console.log(seasonList);

  const fetchSeasons = () => {
    fetch('https://express-api-starter-gbwwjj3hgq-lz.a.run.app/seasons')
      .then((res) => res.json())
      .then((data) => setSeasonList(data.seasons))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchSeasons();
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.HeaderContainer>
        <Styled.TitleText>PREMIER LEAGUE STATS</Styled.TitleText>
        <Styled.SecondTitle>Choose a season below to see more!</Styled.SecondTitle>
      </Styled.HeaderContainer>
      <Styled.Container>
        {seasonList.map((season) => (
          <Link style={{ color: 'inherit', textDecoration: 'none' }} key={season.season} to={`/season/${season}`}>
            <div>
              <Styled.Paragraph key={season}>{season}</Styled.Paragraph>
            </div>
          </Link>
        ))}
      </Styled.Container>
    </Styled.Wrapper>
  )
}

export default Seasons;