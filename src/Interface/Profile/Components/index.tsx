import React, { useState, useEffect } from 'react';
import * as S from '../styles';

export const Profile: React.FC = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      if (window.pageYOffset > 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <S.Container>
      <S.Section>
        <S.LeftSection>
          <S.Heading>
            Heyy, I'm Vishv!
            <br />a<S.Position>Full stack developer</S.Position>
          </S.Heading>
          <S.Description>
            Always interested in building stuff, learning and experimenting with new
            <br />
            technologies. Looking for oppurtunities to grow as a<br />
            developer and improve my skills.
          </S.Description>
        </S.LeftSection>
        <S.RightSection>
          <S.Photo src={require('../../../Shared/Assets/profile.svg')} />
        </S.RightSection>
      </S.Section>
      <S.DownArrow
        visible={visible}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight });
        }}
      >
        <S.Arrow />
      </S.DownArrow>
    </S.Container>
  );
};
