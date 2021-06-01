import React from "react";
import { Props } from "../types";
import * as S from "../styles";

export const ExperienceCard: React.FC<Props> = ({
  post,
  start,
  end,
  logo,
  description,
  url,
}) => {
  return (
    <S.Container>
      <S.LeftSection>
        <S.IntervalContainer>
          <S.Icon />
            <a target="_blank" href={url !== undefined ? url[0] : "/"}>
              <img src={logo} height="100" width="100" />
            </a>
          <S.IntervalHeading>
            {start}
            {end ? ` ~ ${end}` : null}
            <S.Title>
              <a target="_blank" href={url !== undefined ? url[0] : "/"}>
                {post}
              </a>
            </S.Title>
          </S.IntervalHeading>
        </S.IntervalContainer>

        <br />
        <S.RightSection>
          {description.map((desc, index) => (
            <S.Description key={index}>{desc}</S.Description>
          ))}
        </S.RightSection>
      </S.LeftSection>
      <S.Separator />
    </S.Container>
  );
};
