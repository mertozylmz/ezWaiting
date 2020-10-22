module.exports = {
  friendlyName: "Seed data",
  description: "",
  inputs: {
    environment: {
      required: true,
      type: "string",
      description: "Application current environment",
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs) {
    switch (inputs.environment) {
      case "development":
        await Category.createEach([
          {
            name: "Celebrity",
          },
          {
            name: "Education",
          },
          {
            name: "Entertainment",
          },
          {
            name: "Finance",
          },
          {
            name: "Food & Drink",
          },
          {
            name: "Games",
          },
          {
            name: "Health & Fitness",
          },
          {
            name: "Lifestyle",
          },
          {
            name: "Medical",
          },
          {
            name: "Music",
          },
          {
            name: "Navigation",
          },
          {
            name: "News & Politics ",
          },
          {
            name: "Photo & Video",
          },
          {
            name: "Productivity  ",
          },
          {
            name: "Reference",
          },
          {
            name: "Social Networking",
          },
          {
            name: "Sports",
          },
          {
            name: "Travel & Regional ",
          },
          {
            name: "Utilities ",
          },
          {
            name: "Weather",
          },
          {
            name: "International ",
          },
          {
            name: "Art & Photography ",
          },
          {
            name: "Automotive ",
          },
          {
            name: "Books",
          },
          {
            name: "Brides & Weddings",
          },
          {
            name: "Business & Investing",
          },
          {
            name: "Comics",
          },
          {
            name: "Children ",
          },
          {
            name: "Computer & Internet",
          },
          {
            name: "Crafts & Hobbies",
          },
          {
            name: "Electronics & Audio",
          },
          {
            name: "Fashion",
          },
          {
            name: "Literary & Journal",
          },
          {
            name: "Men's Interest",
          },
          {
            name: "Moveis",
          },
          {
            name: "Outdoor & Nature",
          },
          {
            name: "Parenting & Family",
          },
          {
            name: "Pets",
          },
          {
            name: "Professional & Trade",
          },
          {
            name: "Science",
          },
          {
            name: "Technology",
          },
          {
            name: "Teens",
          },
          {
            name: "Women's Interest",
          },
        ]);

        await User.createEach([
          {
            email: "admin@ezwaiting.com",
            password:
              "$2a$10$96byi6RNjocF9xpKrHypoeNsb2HMZo1Wk3OvljemDkL2nNvVSG8PW",
            userRole: 'USER_ROLE_SUPER_ADMIN'
          },
        ]);

      default:
        break;
    }
  },
};
