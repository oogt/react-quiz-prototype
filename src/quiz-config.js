import House1 from './images/house1.png';
import House2 from './images/house2.png';
import House3 from './images/house3.png';
import Roof1 from './images/roof1.png';
import Roof2 from './images/roof2.png';
import Roof3 from './images/roof3.png';
import Person1 from './images/person1.png';
import Person2 from './images/person2.png';
import Person3 from './images/person3.png';

const quizConfig = {
  steps: [
    {
      questions: [
        {
          question: "What kind of house do you own?",
          choices: [
            {
              label: "Free",
              image: House1
            },
            {
              label: "Between",
              image: House2
            },
            {
              label: "Corner",
              image: House3
            }
          ]
        }
      ]
    },
    {
      questions: [
        {
          question: "What kind of roof does your house have?",
          choices: [
            {
              label: "Crooked",
              image: Roof1
            },
            {
              label: "Flat",
              image: Roof2
            },
            {
              label: "Both",
              image: Roof3
            }
          ]
        }
      ]
    },
    {
      questions: [
        {
          question: "What does your household look like?",
          choices: [
            {
              label: "1 - 2 persons",
              image: Person1
            },
            {
              label: "3 - 4 persons",
              image: Person2
            },
            {
              label: "5 or more persons",
              image: Person3
            }
          ]
        }
      ]
    }, {
      questions: [
        {
          question: "Do you have floor heating and/or low temperature radiators?",
          type: "enum",
          choices: [
            {
              label: "JA"
            }, {
              label: "NEE"
            }
          ]
        }, {
          question: "Do you already have solar panels?",
          type: "enum",
          choices: [
            {
              label: "JA"
            }, {
              label: "NEE"
            }
          ]
        }
      ]
    }
  ]
};

export default quizConfig;
