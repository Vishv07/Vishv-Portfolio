import styled from "@emotion/styled";
import { flexibleRowDiv, flexibleColDiv } from "../../Shared/styles";
import { SemiBold, ExtraBold, Regular } from "../../Shared/typography";
import { LightBlue } from "../../Shared/colors";
import { ActivityIcon } from "../../Shared/Assets/Icons/ActivityIcon";

export const Container = styled(flexibleRowDiv)({
  justifyContent: "space-between",
  width: "100%",
});

export const LeftSection = styled(flexibleColDiv)({
  flex: 3,
});

export const Separator = styled(flexibleColDiv)({
  width: "48px",
});

export const RightSection = styled(flexibleColDiv)({
  flex: 2,
});

export const IntervalContainer = styled(flexibleRowDiv)({
  alignItems: "center",
  marginBottom: "20px",
});

export const IntervalHeading = styled.p({
  fontWeight: SemiBold,
  fontSize: "0.875rem",
  paddingLeft: "35px",
});

export const Title = styled.p({
  textDecoration:"underline",
  textUnderlineOffset:"0.3em",
  fontWeight: ExtraBold,
  fontSize: "1.125rem",
});

export const Description = styled.p({
  textAlign:"justify",
  fontWeight: Regular,
  fontSize: "1rem",
  marginBottom: "0.75rem",
});

export const Icon = styled(ActivityIcon)({
  fill: LightBlue,
  stroke: LightBlue,
  position: "relative",
  paddingRight:"10px"
});
