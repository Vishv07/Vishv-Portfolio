import React from 'react';
import * as S from '../styles';
import { GithubIcon } from '../../../Shared/Assets/Icons/GithubIcon';
import { LinkedinIcon } from '../../../Shared/Assets/Icons/LinkedinIcon';

export const Footer: React.FC = () => {
  return (
    <>
      <S.TopBlobContainer>
        <S.TopBlob />
      </S.TopBlobContainer>
      <S.Container>
        <S.Heading>Have Any Project in Mind?</S.Heading>
        <S.Heading>Drop me a message at</S.Heading>
        <S.EmailContainer href='mailto:hrahul2605@gmail.com'>
          <S.Email><a target="_blank" href="mailto:krishnakakadiya9@gmail.com" >krishnakakadiya9@gmail.com</a></S.Email>
        </S.EmailContainer>
        <S.ContactContainer>
          <S.Contact>
            <a target ="_blank" href='https://github.com/Vishv07'>
              <GithubIcon />
            </a>
            <a target ="_blank" href='https://linkedin.com/in/Vishv07'>
              <LinkedinIcon />
            </a>
          </S.Contact>
        </S.ContactContainer>
        <S.BlobContainer>
          <S.Blob />
        </S.BlobContainer>
      </S.Container>
    </>
  );
};
