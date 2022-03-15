const projectsData = [
  {
    id: 1,
    name: "CarAmerican",
    techStack: [
      "Javascript",
      "Handlebars",
      "Express",
      "MongoDB",
      "HTML",
      "CSS",
    ],
    teamMembers: ["Vadim Loparevich", "Joseph Portelli"],
    deployedURL: "https://car-american.herokuapp.com/",
    githubURL: "https://github.com/vloparevich/inception-vol-2",
    photo: "images/road.jpg",
    description:
      "Parses a car listing API to filter cars for sell by brand, year and model. Allows user to save favorite cars, leave comments and reviews.",
  },
  {
    id: 2,
    name: "Academy Hacks",
    techStack: ["Javascript", "React", "Express", "MongoDB", "HTML", "CSS"],
    teamMembers: ["Vadim Loparevich", "Joseph Portelli", "Dria Thomas"],
    deployedURL: "https://the-academy-hacks.netlify.app/",
    githubURL: "https://github.com/vloparevich/academy-hacks",
    photo: "images/academy-hacks.jpg",
    description:
      "Application allows for users to sign up either as a student or tutor. Students choose a tutor based on the programming language they teach and availability with a calendar. Tutors have the ability to see all their upcoming classes.",
  },
  {
    id: 3,
    name: "Beer Pong Game",
    techStack: ["Javascript", "Handlebars", "Canva", "HTML", "CSS"],
    teamMembers: [],
    deployedURL: "https://fsalcedo55.github.io/beer-pong-game/",
    githubURL: "https://github.com/fsalcedo55/beer-pong-game",
    photo: "/images/beer.jpg",
    description:
      "Game designed using Canvas API. Functionality allows for two users to play each other. First one to make the ball in all 5 cups wins the game.",
  },
];

export default projectsData;
