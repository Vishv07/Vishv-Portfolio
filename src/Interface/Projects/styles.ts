import styled from "@emotion/styled";
import { flexibleRowDiv } from "../../Shared/styles";

export {
  Container,
  Heading,
  LeftSection,
  Line,
  Separator,
} from "../Experience/styles";

export const Random = styled.div({
  display: "flex",
  width: "279px",
  height: "288px",
  borderRadius: "24px",
  backgroundColor: "#2e2e2e",
  boxShadow: "2px 2px 2px #000000",
});

export const RightSection = styled(flexibleRowDiv)({
  marginTop: "22px",
  flex: 7,
  flexWrap: "wrap",
  justifyContent: "center",
});
