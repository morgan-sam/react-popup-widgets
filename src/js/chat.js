const merchantSupportTeam = {
  text: ["Please call the merchant support team on 202-555-0195"],
};
const shopperSupportTeam = {
  text: ["Please call the shopper support team on 202-555-0179"],
};
const nothingAnswer = {
  answer: "Nothing, I am just browsing.",
  response: {
    text: [
      "No problem! Please click the reset button if you have any questions.",
    ],
  },
};

const platformGuide = (platform) => {
  let url = null;
  if (platform === "shopify")
    url = "https://help.sezzle.com/merchant-shopify-settings";
  else if (platform === "woocommerce")
    url = "https://help.sezzle.com/sezzle-woocommerce";
  else if (platform === "commentsold")
    url = "https://help.sezzle.com/sezzle-commentsold";
  else if (platform === "other")
    url = "https://help.sezzle.com/merchant-other-platforms";
  return {
    text: ["Please see the following guide:", url],
  };
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
          {
            answer: "I need help connecting Sezzle to my ecommerce platform.",
            response: {
              text: ["Which ecommerce platform does your store use?"],
              options: [
                {
                  answer: "Shopify",
                  response: platformGuide("shopify"),
                },
                {
                  answer: "Woocommerce",
                  response: platformGuide("woocommerce"),
                },
                {
                  answer: "CommentSold",
                  response: platformGuide("commentsold"),
                },
                {
                  answer: "Other Platform",
                  response: platformGuide("other"),
                },
              ],
            },
          },
          {
            answer: "I think my account may have been hacked.",
            response: merchantSupportTeam,
          },
          {
            answer: "My issue is not listed here.",
            response: merchantSupportTeam,
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
                  response: {
                    text: [
                      "Please contact the vendor to begin the refund process.",
                      "For more information click the following link:",
                      "https://help.sezzle.com/shopper-returns/shopper-refund-process",
                    ],
                  },
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
                      "If you still cannot access your account please contact support on 202-555-0179.",
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
