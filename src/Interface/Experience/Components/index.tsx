import React from 'react';
import * as S from '../styles';
import { ExperienceCard } from '../../ExperienceCard/Components';
import { Works } from '../constants';

export const Experience: React.FC = () => {
  return (
    <S.Container>
      <S.LeftSection>
        <S.Heading>Experience</S.Heading>
        <S.Line />
        <S.Description></S.Description>
      </S.LeftSection>
      <S.Separator />
      <S.RightSection>
        {Works.map((work, index) => (
          <React.Fragment key={index}>
            <ExperienceCard {...work} />
            <S.WorkSeparator />
          </React.Fragment>
        ))}
      </S.RightSection>
    </S.Container>
  );
};
