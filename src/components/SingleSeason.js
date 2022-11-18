import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Styled } from './Styled';

const SingleSeason = () => {
  const { season } = useParams();
  console.log(season)
  const navigate = useNavigate();
  const [singleseason, setSingleSeason] = useState([]);
  console.log(singleseason)

  useEffect(() => {
    fetch(`https://express-api-starter-gbwwjj3hgq-lz.a.run.app/season/${season}`)
      .then((res) => res.json())
      .then((data) => setSingleSeason(data.uniqueseason))
      .catch((error) => console.log(error));
  }, [season]);

  const goBack = () => {
    navigate(-1);
  }

  return (
    <Styled.Container>
      <Styled.Paragraph>
        {singleseason.season}
      </Styled.Paragraph>
      <button type="button" onClick={goBack}>Go back</button>
    </Styled.Container>
  )
}

export default SingleSeason;