// @flow
type Question = {
  id: number,
  title: string,
  type: "radio" | "scale" | "text",
  options?: Array<{ id: number, title: string, content: string }>
};
const questions: Array<Question> = [
  {
    id: 1,
    title: "How well did I display courage?",
    type: "radio",
    options: [
      {
        id: 1,
        title: "Please Improve",
        content:
          " You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t."
      },
      {
        id: 2,
        title: "You Were Good",
        content:
          "You sometimes participate in meetings but you feel that they don’t always bring up important things when they should."
      },
      {
        id: 3,
        title: "You Were Great",
        content:
          "I and others can count on your courage to help the team do what is right."
      }
    ]
  },
  {
    id: 2,
    title: "How do you rate the coding performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    type: "scale"
  },
  {
    id: 3,
    title: "How well did I display courage?",
    type: "text"
  }
];

export const getQuestions = () => questions;
