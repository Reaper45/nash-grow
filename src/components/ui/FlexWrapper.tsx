import styled from "@emotion/styled";

const FlexWrapper = styled("div")<FlexWrapperProps & SpacingType>`
  display: ${({ display = "flex" }) => display};
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ align = "center" }) => align};
  justify-content: ${({ justify = "start" }) => justify};
  flex-wrap: ${({ flexWrap = "initial" }) => flexWrap};
  column-gap: ${({ columnGap }) => (columnGap ? `${columnGap}rem` : "initial")};
  row-gap: ${({ rowGap }) => (rowGap ? `${rowGap}rem` : "initial")};

  // margins
  ${(props) => props.m && `margin: ${props.m}rem;`}
  ${(props) => props.mt && `margin-top: ${props.mt}rem;`}
  ${(props) => props.ml && `margin-left: ${props.ml}rem;`}
  ${(props) => props.mb && `margin-bottom: ${props.mb}rem;`}
  ${(props) => props.mr && `margin-right: ${props.mr}rem;`}
  ${(props) =>
    props.my &&
    `
    margin-top: ${props.my}rem;
    margin-bottom: ${props.my}rem;
  `}
  ${(props) =>
    props.mx &&
    `
    margin-right: ${props.mx}rem;
    margin-left: ${props.mx}rem;
  `};

  // paddings
  ${(props) => props.p && `padding: ${props.p}rem`};
  ${(props) => props.pt && `padding-top: ${props.pt}rem`};
  ${(props) => props.pl && `padding-left: ${props.pl}rem`};
  ${(props) => props.pb && `padding-bottom: ${props.pb}rem`};
  ${(props) => props.pr && `padding-right: ${props.pr}rem`};
  ${(props) =>
    props.py &&
    `
    padding-top: ${props.py}rem;
    padding-bottom: ${props.py}rem;
  `}
  ${(props) =>
    props.px &&
    `
    padding-right: ${props.px}rem;
    padding-left: ${props.px}rem;
  `};
`;

export default FlexWrapper;
