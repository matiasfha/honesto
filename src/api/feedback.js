// @flow
import { getUsers } from "api/users";
import { getQuestions } from "api/questions";

export const generateFeedback = () => {
  const users = getUsers();
  const questions = getQuestions();

  const feedback = users
    .filter(user => user.id !== "8705633T")
    .map(user => {
      return {
        user,
        answers: [],
        questions: questions.map(question => ({
          ...question,
          answered: false
        })),
        submitted: false
      };
    });
  feedback.push({
    user: users.find(user => user.id === "8705633T"),
    answers: [
      {
        answer: {
          id: 1,
          title: "Please Improve",
          content:
            " You may have done one or the following: Maybe you were mostly quiet in meetings and when you had something on your mind, you brought it to the team afterward. Or, you had feedback that would be valuable to go, but you found it too difficult. Or, you had an opportunity to grow by doing something uncomfortable but you didn’t."
        },
        questionId: 1,
        type: "radio"
      }
    ],
    questions,
    submitted: true
  });
  return feedback;
};

export const generateMyFeedback = () => {
  const users = getUsers();

  return [
    {
      user: users[0],
      answers: [
        {
          questionId: 1,
          type: "radio",
          answer: {
            option: 2
          }
        },
        {
          questionId: 2,
          type: "scale",
          answer: {
            scale: 5
          }
        },
        {
          questionId: 3,
          type: "text",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      ]
    },
    {
      user: users[1],
      answers: [
        {
          questionId: 1,
          type: "radio",
          answer: {
            option: 1
          }
        },
        {
          questionId: 2,
          type: "scale",
          answer: {
            scale: 10
          }
        },
        {
          questionId: 3,
          type: "text",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    }
  ];
};

export const generateTeamFeedback = () => {
  const users = getUsers();

  return [
    {
      user: users[3],
      answers: [
        {
          questionId: 1,
          type: "radio",
          answer: {
            option: 3
          }
        },
        {
          questionId: 2,
          type: "scale",
          answer: {
            scale: 2
          }
        },
        {
          questionId: 3,
          type: "text",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
        }
      ]
    },
    {
      user: users[2],
      answers: [
        {
          questionId: 1,
          type: "radio",
          answer: {
            option: 2
          }
        },
        {
          questionId: 2,
          type: "scale",
          answer: {
            scale: 1
          }
        },
        {
          questionId: 3,
          type: "text",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      ]
    }
  ];
};
