// @flow
import * as React from "react";
import styled from "@emotion/styled/macro";
import Button from "components/Button";
import DefaultAvatar from "components/Avatar";

const Avatar = styled(DefaultAvatar)`
  margin-right: 30px;
`;
const Row = styled.div`
  width: 95%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  border-bottom: 1px solid rgba(172, 177, 182, 0.33);
  cursor: pointer;
  &:hover {
    background: rgba(213, 176, 242, 0.1);
  }
`;

const Data = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.span`
  font-size: 22px;
  line-height: 26px;
  color: #59636e;
  font-weight: bold;
`;

type PropsT = {
  feedback: Array<{
    user: {
      id: string,
      picture: {
        thumbnail: string
      },
      name: string
    },
    submitted: boolean
  }>
};

const FillOutButton = ({ userId }) => (
  <Button to={`/questions/${userId}`} type="default">
    Fill out
  </Button>
);

const ViewSubmissionButton = ({ userId }) => (
  <Button type="clear" to={`/team-feedback/${userId}`}>
    View Submission
  </Button>
);

const FeedbackList = ({ feedback }: PropsT) => {
  return (
    <>
      {feedback.map(({ user, submitted }) => (
        <Row key={user.id}>
          <Data>
            <Avatar src={user.picture.thumbnail} alt="avatar" />
            <Name>{user.name}</Name>
          </Data>
          {submitted ? (
            <ViewSubmissionButton userId={user.id} />
          ) : (
            <FillOutButton userId={user.id} />
          )}
        </Row>
      ))}
    </>
  );
};

export default FeedbackList;
