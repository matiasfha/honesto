import * as React from "react";
import styled from "@emotion/styled/macro";
import Rating from "react-rating";
import starIcon from "./star.svg";
import starFullIcon from "./star-full.svg";
import flagIcon from "./flag.svg";

const Container = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 14px;
`;
const Count = styled.p`
  color: ${props => props.theme.colors.black};
  font-size: 16px;
  line-height: 19px;
`;

const StarIcon = styled.img`
  width: 28px;
  height: 28px;
`;

const FlagIcon = styled.img`
  width: 19px;
  height: 23px;
  margin-left: 23px;
`;

const Footer = ({ count, total }) => {
  return (
    <Container>
      <div>
        <Title>questions completed</Title>
        <Count>
          {count}/{total}
        </Count>
      </div>
      <div>
        <Rating
          emptySymbol={<StarIcon src={starIcon} alt="Star Icon" />}
          fullSymbol={<StarIcon src={starFullIcon} alt="Full Star Icon" />}
        />
        <FlagIcon src={flagIcon} alt="Fla Icon" />
      </div>
    </Container>
  );
};

export default Footer;
