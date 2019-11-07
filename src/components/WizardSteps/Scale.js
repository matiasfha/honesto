import * as React from "react";
import Rating from "react-rating";
import styled from "@emotion/styled/macro";

const EmptySquare = styled.div`
  background: #f2f3f4;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 74px;
  height: 74px;
`;

const FullSquare = styled(EmptySquare)`
  background: ${props => props.theme.colors.purple};
`;
const ScaleStep = ({ description }) => {
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <p>{description}</p>
      <div>
        <Rating
          start={1}
          stop={10}
          emptySymbol={<EmptySquare />}
          fullSymbol={<FullSquare />}
          onClick={value => setRating(value)}
        />
        <span>{rating}/10</span>
      </div>
    </>
  );
};

export default ScaleStep;
