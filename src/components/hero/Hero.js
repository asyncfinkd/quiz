import React from "react";
import { withRouter } from "react-router-dom";
import HeroQuiz from "./heroQuiz/HeroQuiz";
import List from "./list/List";

const questions = [
  {
    id: "0",
    question:
      "When you are in a community (at a party with fellow workers or fellow practitioners), you usually prefer",
    answerOptions: [
      {
        answerText: "Talking with each separately",
        isIntrovert: true,
      },
      {
        answerText: "Participate in a general conversation or",
        isExtravert: false,
      },
    ],
  },
  {
    id: "1",
    question: "You consider yourself more",
    answerOptions: [
      {
        answerText: "prone to theorizing",
        isIntrovert: true,
      },
      {
        answerText: "realistic or",
        isExtravert: false,
      },
    ],
  },
  {
    id: "2",
    question: "In your opinion, which one is worse?",
    answerOptions: [
      {
        answerText: "«all goes according to the plan»",
        isIntrovert: true,
      },
      {
        answerText: "“living in a dream world”» or",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "3",
    question: "You are more impressed by",
    answerOptions: [
      {
        answerText: "solid principles or",
        isIntrovert: false,
      },
      {
        answerText: "strong emotions",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "4",
    question: "You are more attracted",
    answerOptions: [
      {
        answerText: "persuasive or",
        isIntrovert: false,
      },
      {
        answerText: "sentimental",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "5",
    question: "If you have to do an unusual job, it’s more convenient for you.",
    answerOptions: [
      {
        answerText: "to plan it in advance or",
        isIntrovert: false,
      },
      {
        answerText: "to find out what to do, already in the course of work",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "6",
    question: "When you need to make a choice or make a decision, you make it.",
    answerOptions: [
      {
        answerText: "mostly attentive and carefully or",
        isIntrovert: false,
      },
      {
        answerText: "often spontaneously",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "7",
    question: "At parties or social gatherings you usually",
    answerOptions: [
      {
        answerText: "stay up late",
        isIntrovert: false,
      },
      {
        answerText: "leave early feeling tired",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "8",
    question: "You are more attracted to",
    answerOptions: [
      {
        answerText: "realists or",
        isIntrovert: false,
      },
      {
        answerText: "imaginative people",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "9",
    question: "You are more interested in",
    answerOptions: [
      {
        answerText: "what really exists or",
        isIntrovert: false,
      },
      {
        answerText: "unrealized opportunities",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "10",
    question: "When assessing other people, you usually",
    answerOptions: [
      {
        answerText: "firm and objective",
        isIntrovert: false,
      },
      {
        answerText: "condescending and subjective",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "11",
    question: "More often you act",
    answerOptions: [
      {
        answerText: "punctually or",
        isIntrovert: false,
      },
      {
        answerText: "slowly",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "12",
    question: "You prefer",
    answerOptions: [
      {
        answerText: "doing work in advance or",
        isIntrovert: false,
      },
      {
        answerText: "doing everything last moment",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "13",
    question: "Among your friends you",
    answerOptions: [
      {
        answerText: "you know everything about everyone or",
        isIntrovert: false,
      },
      {
        answerText: "the last to know what is happening",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "14",
    question: "When doing your usual work you prefer",
    answerOptions: [
      {
        answerText: "doing it the usual way or",
        isIntrovert: false,
      },
      {
        answerText: "inventing your own way",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "15",
    question: "When you read at your pleasure, you prefeer when a writer",
    answerOptions: [
      {
        answerText: "clearly explains what he means or",
        isIntrovert: false,
      },
      {
        answerText: "sets out thoughts in an unusual, original form",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "16",
    question: "What attracts you more",
    answerOptions: [
      {
        answerText: "consistency and reasoning or",
        isIntrovert: false,
      },
      {
        answerText: "the harmony of human relations",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "17",
    question: "It is easier for you to make judgments.",
    answerOptions: [
      {
        answerText: "based on logic and on facts or",
        isIntrovert: false,
      },
      {
        answerText: "based on your values",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "18",
    question: "You are more attracted to situations",
    answerOptions: [
      {
        answerText: "in which there is an element of certainty",
        isIntrovert: false,
      },
      {
        answerText: "which are full of unpredictability",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "19",
    question: "You can say that you are more",
    answerOptions: [
      {
        answerText: "serious and focused",
        isIntrovert: false,
      },
      {
        answerText: "not taking life too seriously",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "20",
    question: "When talking on the phone",
    answerOptions: [
      {
        answerText: "you rarely think about: “What to say?” in advance Or",
        isIntrovert: false,
      },
      {
        answerText: "often think out in advance what you will say",
        isIntrovert: true,
      },
    ],
  },
  {
    id: "21",
    question: "How do you think? Data",
    answerOptions: [
      {
        answerText: '"speak for itself" or',
        isIntrovert: true,
      },
      {
        answerText: "illustrates some patterns",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "22",
    question: "Dreamers",
    answerOptions: [
      {
        answerText: "annoy you or",
        isIntrovert: true,
      },
      {
        answerText: "attract and fascinate you",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "23",
    question: "More often you are",
    answerOptions: [
      {
        answerText: "calm and impartial or",
        isIntrovert: true,
      },
      {
        answerText: "cordial and sympathetic",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "24",
    question: "You think that it is worse to",
    answerOptions: [
      {
        answerText: "be unreasonable or",
        isIntrovert: true,
      },
      {
        answerText: "be malevolent",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "25",
    question: "In most cases it is better to",
    answerOptions: [
      {
        answerText: "try to control the course of events or",
        isIntrovert: true,
      },
      {
        answerText: "rely on the natural course of events.",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "26",
    question: "You feel better when",
    answerOptions: [
      {
        answerText: "you have already made a purchase or",
        isIntrovert: true,
      },
      {
        answerText: "you still have the opportunity to do it.",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "27",
    question: "In the group of colleagues you tend to",
    answerOptions: [
      {
        answerText: "initiate a conversation or",
        isIntrovert: true,
      },
      {
        answerText: "wait for someone to contact you",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "28",
    question: "Claims made on the basis of common sense",
    answerOptions: [
      {
        answerText: "rarely raise doubts or",
        isIntrovert: true,
      },
      {
        answerText: "often raise doubts.",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "29",
    question: "Would you like your friend to be a person",
    answerOptions: [
      {
        answerText: 'who "stands firmly on the ground" or',
        isIntrovert: true,
      },
      {
        answerText: "who always has new ideas.",
        isIntrovert: false,
      },
    ],
  },
  {
    id: "30",
    question: "When making decisions it is easier for you to follow",
    answerOptions: [
      {
        answerText: "the rules and standards or",
        isIntrovert: false,
      },
      {
        answerText: "the wishes of interested parties",
        isIntrovert: false,
      },
    ],
  },
];

class Hero extends React.Component {
  constructor(props) {
    super(props);
    // Component
  }
  state = {
    round: 0,
    currentQuestion: 0,
    introvertCounter: 1,
    extravertCounter: 1,
    showResult: false,
  };
  nextQuestion = () => {
    const nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // console.log();
      // if (questions[this.state.currentQuestion].answerOptions[0].isIntrovert) {
      //   if (
      //     !questions[this.state.currentQuestion].answerOptions[1].isIntrovert
      //   ) {
      //     console.log("intro");
      //   } else {
      //     this.setState((state) => ({
      //       extravertCounter: (state.extravertCounter =
      //         this.state.extravertCounter + 1),
      //     }));
      //     console.log(this.state.extravertCounter);
      //   }
      //   this.setState((state) => ({
      //     introvertCounter: (state.introvertCounter =
      //       this.state.introvertCounter + 1),
      //   }));
      //   console.log(this.state.introvertCounter);
      // } else {
      // }
      // if (questions[this.state.currentQuestion].answerOptions[0].isIntrovert) {
      //   if (
      //     questions[this.state.currentQuestion].answerOptions[1].isIntrovert
      //   ) {
      //     console.log("introvert");
      //   } else {
      //     console.log("extravert");
      //   }
      // }
      // if (questions[this.state.currentQuestion].answerOptions[0].isIntrovert) {
      //   this.setState((state) => ({
      //     introvertCounter: (state.introvertCounter =
      //       this.state.introvertCounter + 1),
      //   }));
      //   console.log("introvert");
      //   console.log(this.state.introvertCounter);
      // } else if (
      // ) {
      //   this.setState((state) => ({
      //     extravertCounter: (state.extravertCounter =
      //       this.state.extravertCounter + 1),
      //   }));
      //   console.log("extravert");
      //   console.log(this.state.extravertCounter);
      // }
      this.setState((state) => ({
        currentQuestion: (state.currentQuestion = nextQuestion),
      }));
    } else {
      this.setState((state) => ({
        showResult: (state.showResult = true),
      }));
    }
  };

  prevQuestion = () => {
    const prevQuestion = this.state.currentQuestion - 1;

    this.setState((state) => ({
      currentQuestion: (state.currentQuestion = prevQuestion),
    }));
  };

  componentWillMount = () => {
    document.addEventListener("keydown", (e) => {
      const keyName = e.keyCode;
      if (keyName === 37) {
        if (this.state.currentQuestion > 0) {
          this.prevQuestion();
        }
      } else if (keyName == 39) {
        this.nextQuestion();
      }
    });
  };
  renderShowResult = () => {
    const introvert = this.state.introvertCounter;
    const extravert = this.state.extravertCounter;
    if (introvert >= extravert) {
      return (
        <>
          <p>You're introvert</p>
        </>
      );
    } else {
      return (
        <>
          <p>You're extravert</p>
        </>
      );
    }
  };
  rendeHero = () => {
    const username = localStorage.getItem("username");
    if (username == "" || !username) {
      this.props.history.push("/");
    } else {
      return (
        <>
          {this.state.showResult && <>{this.renderShowResult()}</>}
          <div className="flex">
            <List
              currentQuestion={this.state.currentQuestion}
              questions={questions}
            />
            <HeroQuiz
              currentQuestion={this.state.currentQuestion}
              questions={questions}
              backHandle={() => this.prevQuestion()}
              nextHandle={() => this.nextQuestion()}
            />
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.rendeHero()}</>;
  }
}

export default withRouter(Hero);
