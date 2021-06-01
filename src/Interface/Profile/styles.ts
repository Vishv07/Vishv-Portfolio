import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import { flexibleRowDiv, flexibleColDiv } from "../../Shared/styles";
import { Bold, Regular } from "../../Shared/typography";
import { LightBlue } from "../../Shared/colors";
import { TopBlob } from "../../Shared/Assets/TopBlob";
import { DownArrowIcon } from "../../Shared/Assets/Icons/DownArrowIcon";

export const Container = styled(flexibleColDiv)({
  height: "100vh",
  justifyContent: "center",
});

export const Section = styled(flexibleRowDiv)`
  width: 100%;
  justify-content: space-between;
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const LeftSection = styled(flexibleColDiv)({
  padding: "42px 0px",
  flex: 3,
  justifyContent: "center",
});

export const Heading = styled.span`
  font-weight: ${Bold};
  font-size: 3rem;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const Position = styled.span`
  color: ${LightBlue};
  font-weight: ${Bold};
  font-size: 3rem;
  padding-left: 12px;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;
export const Description = styled.div`
  margin-top: 12px;
  font-weight: ${Regular};
  font-size: 1rem;
  @media (max-width: 1023px) {
    text-align: center;
  }
`;

export const RightSection = styled(flexibleColDiv)({
  alignItems: "center",
  flex: 2,
  justifyContent: "center",
});

export const Photo = styled.img`
  border-radius: 100%;
  box-shadow: 2px 2px 2px #000000;
  max-height: 250px;
`;

export const Blob = styled(TopBlob)`
  top: -50%;
  position: absolute;
  align-self: center;
  height: 1580px;
  width: 1580px;
  z-index: -1;
  fill: rgba(242, 244, 248, 0.01);
  transform: rotate(90deg);
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
`;

export const DownArrow = styled.a<{ visible: boolean }>`
  position: absolute;
  height: 24px;
  width: 24px;
  bottom: 0;
  margin-bottom: 48px;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  animation: ${bounce} 2s ease-in-out 2;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    margin-bottom: 12px;
  }
`;

export const Arrow = styled(DownArrowIcon)({
  height: 24,
  width: 24,
});
