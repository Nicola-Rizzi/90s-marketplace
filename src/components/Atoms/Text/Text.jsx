import React from "react";
import styled, { css } from "styled-components";

export const TEXT_TYPE = {
  HEADING1: "HEADING1",
  HEADING2: "HEADING2",
  HEADING3: "HEADING3",
  HEADING4: "HEADING4",
  LARGE: "LARGE",
  MEDIUM: "MEDIUM",
  CAPTION: "CAPTION",
  NORMAL: "NORMAL",
  SMALL: "SMALL",
};

const TEXT_SIZE = {
  HEADING1: 50 / 16,
  HEADING2: 42 / 16,
  HEADING3: 30 / 16,
  HEADING4: 28 / 16,
  LARGE: 24 / 16,
  MEDIUM: 20 / 16,
  CAPTION: 18 / 16,
  NORMAL: 16 / 16,
  SMALL: 11 / 16,
};

const commonStyles = css`
  font-family: "Heebo", sans-serif;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  text-align: left;
`;

const StyledSpan = styled.span`
  ${commonStyles}
  font-weight: ${({ isBold }) => (isBold ? 500 : 400)};
  font-size: ${({ type }) => TEXT_SIZE[type]}rem;
`;

const Text = ({
  type = "TEXT_TYPE.SMALL",
  isBold = false,
  label = "",
  color = "",
  link = false,
}) => (
  <StyledSpan type={type} isBold={isBold} color={color} link={link}>
    {label}
  </StyledSpan>
);

export default Text;