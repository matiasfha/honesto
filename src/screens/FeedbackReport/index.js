import React from "react";
import styled from "@emotion/styled/macro";
import Dropdown from "components/Dropdown";
import { PageContainer, PageHeader, PageTitle } from "components/PageLayout";
import Button from "components/Button";
import ListPanel from "./ListPanel";
import ResultsPanel from "./ResultsPanel";
import { StateContext } from "contexts/State";

const Container = styled(PageContainer)`
  width: 1180px;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 2.5em;
`;

const Header = styled(PageHeader)`
  justify-self: flex-start;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
`;

const ActionsContainer = styled.div`
  display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    flex-basis: 47%;
}
`;

type PropsT = {
  type: "my" | "team"
};
const FeedbackReport = ({ type }: PropsT) => {
  const {
    myFeedback,
    fetchMyFeedback,
    teamFeedback,
    fetchTeamFeedback
  } = React.useContext(StateContext);
  const [selectedFeedback, setSelectedFeedback] = React.useState(null);
  let feedback = type === "my" ? myFeedback : teamFeedback;
  React.useEffect(() => {
    if (type === "my") {
      const getData = async () => await fetchMyFeedback();
      if (myFeedback == null) {
        getData();
      }
    } else {
      const getData = async () => await fetchTeamFeedback();
      if (teamFeedback == null) {
        getData();
      }
    }
  }, [fetchMyFeedback, fetchTeamFeedback, myFeedback, teamFeedback, type]);

  const onSelect = selection => {
    setSelectedFeedback(selection);
  };

  const Title = () => (
    <PageTitle>{type === "my" ? "My Feedback" : "Team Feedback"}</PageTitle>
  );
  return (
    <Container>
      <Header>
        <Title />
        <ActionsContainer>
          <Dropdown placeholder="November 2019" title="Feedbkack Period" />
          <Button type="default">Publish Feedback</Button>
        </ActionsContainer>
      </Header>
      <ColumnContainer>
        <ListPanel feedback={feedback} onSelect={onSelect} type={type} />
        <ResultsPanel feedback={selectedFeedback} />
      </ColumnContainer>
    </Container>
  );
};

export default FeedbackReport;
