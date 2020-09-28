const shopperSupportTeam = {
  text: ["Please call the support team on 202-555-0179"],
};

const nothingAnswer = {
  answer: "Nothing, I am just browsing.",
  response: {
    text: ["No problem! Please click here again if you have any questions."],
  },
};

export const chatTree = {
  text: ["Welcome to Sezzle!", "Are you a shopper or a merchant?"],
  options: [
    {
      answer: "Merchant",
      response: {
        text: ["How can we help you today?"],
        options: [
          {
            answer: "I'd like to contact the sales team.",
            response: { text: ["Please call the sales team on 202-555-0109"] },
          },
          nothingAnswer,
        ],
      },
    },
    {
      answer: "Shopper",
      response: {
        text: ["How can we help you today?"],
        options: [
          {
            answer: "I have an issue with a payment.",
            response: {
              text: ["What is your payment issue?"],
              options: [
                {
                  answer: "I would like a refund.",
                  response: [
                    "Please contact the vendor to begin the refund process.",
                    "For more information click the following link:",
                    "https://help.sezzle.com/shopper-returns/shopper-refund-process",
                  ],
                },
                {
                  answer: "A payment I made has not registered on my account.",
                  response: shopperSupportTeam,
                },
                ,
                {
                  answer: "My issue isn't listed.",
                  response: shopperSupportTeam,
                },
              ],
            },
          },
          {
            answer: "There is an issue with my account.",
            response: {
              text: ["What account issue do you have?"],
              options: [
                {
                  answer: "I think my account may have been hacked.",
                  response: shopperSupportTeam,
                },
                {
                  answer: "I cannot login to my account.",
                  response: {
                    text: [
                      "Please try reseting your PIN with the following link:",
                      "https://dashboard.sezzle.com/customer/reset-pin/verify-phone",
                      "If that does not work contact support on 202-555-0179.",
                    ],
                  },
                },
              ],
            },
          },
          nothingAnswer,
        ],
      },
    },
  ],
};
