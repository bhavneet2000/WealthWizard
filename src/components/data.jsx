const data = [
    {
      id: 1,
      question: "What is the name of the place where you keep your money safe?",
      answers: [
        {
          text: "Bank",
          correct: true,
        },
        {
          text: "Supermarket",
          correct: false,
        },
        {
          text: "Park",
          correct: false,
        },
        {
          text: "Restaurant",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which of these is not a way to earn money?",
      answers: [
        {
          text: "Working",
          correct: false,
        },
        {
          text: "Sleeping",
          correct: true,
        },
        {
          text: "Selling things",
          correct: false,
        },
        {
          text: "Doing chores",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What do you call the money you receive for doing work?",
      answers: [
        {
          text: "Salary",
          correct: true,
        },
        {
          text: "Toy",
          correct: false,
        },
        {
          text: "Book",
          correct: false,
        },
        {
          text: "Game",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What do you call money you save for later?",
      answers: [
        {
          text: "Savings",
          correct: true,
        },
        {
          text: "Spending",
          correct: false,
        },
        {
          text: "Throwing",
          correct: false,
        },
        {
          text: "Eating",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is the term for money borrowed from a bank that you have to pay back?",
      answers: [
        {
          text: "Loan",
          correct: true,
        },
        {
          text: "Gift",
          correct: false,
        },
        {
          text: "Present",
          correct: false,
        },
        {
          text: "Treasure",
          correct: false,
        },
      ],
    },
  ];
  
  const prizeMoney = [
    { id: 1, amount: "₹ 5000" },
    { id: 2, amount: "₹ 15000" },
    { id: 3, amount: "₹ 30000" },
    { id: 4, amount: "₹ 60000" },
    { id: 5, amount: "₹ 100000" },
    { id: 6, amount: "₹ 150000" },
    { id: 7, amount: "₹ 250000" },
    { id: 8, amount: "₹ 400000" },
    { id: 9, amount: "₹ 600000" },
    { id: 10, amount: "₹ 1000000" },
    { id: 11, amount: "₹ 5000000" },
    { id: 12, amount: "₹ 100000000" },
    { id: 13, amount: "₹ 300000000" },
    { id: 14, amount: "₹ 500000000" },
    { id: 15, amount: "₹ 1000000000" },
  ].reverse();
  
  export { prizeMoney, data };
  