import React, { useState } from "react";
import * as S from "../styles";
import { Props } from "../types";

export const ProjectCard: React.FC<Props> = ({
  img,
  name,
  url,
  description,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ margin: 12 }}>
      <S.Container
        href={url}
        target="_blank"
        image={img ? true : false}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {img && <S.Image hover={hover} src={img} />}
        <S.Details hover={img ? hover : true}>
          <S.Title>{name}</S.Title>
          {description ? <S.Description>{description}</S.Description> : null}
        </S.Details>
      </S.Container>
    </div>
  );
};
