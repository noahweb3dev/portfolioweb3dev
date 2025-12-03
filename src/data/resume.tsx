import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Noah",
  initials: "N",
  url: "https://example.com",
  location: "Lagos, Nigeria",
  locationLink: "https://www.google.com/maps/place/Lagos,+Nigeria",
  description:
    "Web3 builder and SaaS creator. I love building things and helping people. Very active on Twitter.",
  summary:
    "I'm a driven builder who sees the internet as the ultimate platform for turning ideas into reality. I left traditional work to pursue real freedom—creating products that solve genuine problems. My approach is simple: curiosity scales faster than capital. I learn relentlessly, think deeply, and build with purpose. Right now, I'm laser-focused on launching a SaaS product that creates lasting impact and scales beyond me.",
  avatarUrl: "/profile-pic.jpg", // Update this if you have a custom avatar
  skills: [
    "React",
    "Next.js",
    "TS",
    "Node",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Web3",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ugwunoah@yahoo.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/noahweb3dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "#",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/noahweb3dev?s=21",
        icon: Icons.x,
        navbar: true,
      },
      // Youtube and email can be added if needed
    },
  },

  work: [
    {
      company: "BlockSafeSpace",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Founder & Web3 Developer",
      logoUrl: "/bslogo.jpg", // Add logo if available
      start: "Jan 2023",
      end: "Present",
      description:
        "Launched SaaS & Web3 products. Built smart contracts, scalable microservices, and analytics pipelines.",
    },
    {
      company: "Buildspace",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Cohort Member & Web3 Builder",
      logoUrl: "/buildspace.jpg", // Add logo if available
      start: "Jun 2022",
      end: "Dec 2022",
      description:
        "Shipped full-stack blockchain projects and rapid SaaS prototypes. Collaborated with other builders and presented demos.",
    },
    {
      company: "NaijaChain",
      href: "#",
      badges: [],
      location: "Lagos, Nigeria",
      title: "Blockchain Engineer",
      logoUrl: "/etherum.png", // Add logo if available
      start: "Jan 2021",
      end: "Dec 2022",
      description:
        "Developed decentralized payment and verification tools. Built TypeScript SDKs and optimized smart contract interactions.",
    },
    {
      company: "Freelance / Independent Projects",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Full-Stack Developer & Consultant",
      logoUrl: "", // Add logo if available
      start: "Jan 2021",
      end: "Present",
      description:
        "Built crypto dashboards and web apps using React, TypeScript, Solidity, and AWS. Focused on usability, scalability, and security.",
    },
  ],

  education: [
    {
      school: "Buildspace",
      href: "#",
      degree: "SF1 Cohort, Web3 & Full-Stack Product Building",
      start: "2022",
      end: "2023",
      location: "Remote",
      logoUrl: "/buildspace.jpg", // Add logo if available
    },
    {
      school: "Yaba College of Technology (Yaba Tech)",
      href: "#",
      degree: "National Diploma in Computer Science",
      start: "2018",
      end: "2022",
      location: "Lagos, Nigeria",
      logoUrl: "/yabatechlogo.jpg", // Add logo if available
    },
    {
      school: "Lagos Business School / Online Business Program",
      href: "#",
      degree: "Business Administration & Entrepreneurship",
      start: "2019",
      end: "2021",
      location: "Lagos, Nigeria",
      logoUrl: "/lagosbslogo.png", // Add logo if available
    },
  ],

  hackathons: [
    {
      title: "Buildspace Hackathon SF1",
      dates: "2022",
      location: "Remote",
      description: "Built full-stack Web3 applications with NFT minting and smart contracts.",
      image: "https://via.placeholder.com/150/4A90E2/ffffff?text=Buildspace",
      links: [],
    },
    {
      title: "CryptoHacks Nigeria",
      dates: "2021",
      location: "Lagos, Nigeria",
      description: "Created decentralized payment & identity verification prototype. Won 'Best Use of Blockchain for Social Impact.'",
      image: "https://via.placeholder.com/150/00D4AA/ffffff?text=CryptoHacks",
      links: [],
    },
    {
      title: "ETHGlobal Hackathon",
      dates: "2022",
      location: "Remote",
      description: "Built DeFi protocol with smart contract integrations and Web3 authentication.",
      image: "https://via.placeholder.com/150/8B5CF6/ffffff?text=ETHGlobal",
      links: [],
    },
    {
      title: "Web3 Lagos Hackathon",
      dates: "2021",
      location: "Lagos, Nigeria",
      description: "Developed blockchain-based supply chain tracking system.",
      image: "https://via.placeholder.com/150/F59E0B/ffffff?text=Web3Lagos",
      links: [],
    },
    {
      title: "Solana Hackathon",
      dates: "2022",
      location: "Remote",
      description: "Created NFT marketplace on Solana with fast transactions and low fees.",
      image: "https://via.placeholder.com/150/14F195/ffffff?text=Solana",
      links: [],
    },
  ],

  projects: [
    {
      title: "Coming Soon",
      href: "#",
      dates: "2025",
      active: true,
      description: "Exciting projects in development. Stay tuned for updates!",
      technologies: ["React", "Next.js", "Web3"],
      links: [],
      image: "",
      video: "",
    },
  ],
};
//         {
//           title: "Streamer Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/htn2017",
//         },
//         {
//           title: "Client Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/RTSPClient",
//         },
//       ],
//     },
//     {
//       title: "Hack The 6ix",
//       dates: "August 26th - 27th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/ShareShip/ShareShip",
//         },
//         {
//           title: "Site",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://share-ship.herokuapp.com/",
//         },
//       ],
//     },
//     {
//       title: "Stupid Hack Toronto",
//       dates: "July 23rd, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/nsagirlfriend/nsagirlfriend",
//         },
//       ],
//     },
//     {
//       title: "Global AI Hackathon - Toronto",
//       dates: "June 23rd - 25th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/TinySamosas/",
//         },
//       ],
//     },
//     {
//       title: "McGill AI for Social Innovation Hackathon",
//       dates: "June 17th - 18th, 2017",
//       location: "Montreal, Quebec",
//       description:
//         "Developed realtime facial microexpression analyzer using AI",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
//       links: [],
//     },
//     {
//       title: "Open Source Circular Economy Days Hackathon",
//       dates: "June 10th, 2017",
//       location: "Toronto, Ontario",
//       description:
//         "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
//       win: "1st Place Winner",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/genecis",
//         },
//       ],
//     },
//     {
//       title: "Make School's Student App Competition 2017",
//       dates: "May 19th - 21st, 2017",
//       location: "International",
//       description: "Improved PocketDoc and submitted to online competition",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
//       win: "Top 10 Finalist | Honourable Mention",
//       links: [
//         {
//           title: "Medium Article",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
//         },
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "HackMining",
//       dates: "May 12th - 14th, 2017",
//       location: "Toronto, Ontario",
//       description: "Developed neural network to optimize a mining process",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
//       links: [],
//     },
//     {
//       title: "Waterloo Equithon",
//       dates: "May 5th - 7th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
//       links: [
//         {
//           title: "Devpost",
//           icon: <Icons.globe className="h-4 w-4" />,
//           href: "https://devpost.com/software/pocketdoc-react-native",
//         },
//         {
//           title: "YouTube",
//           icon: <Icons.youtube className="h-4 w-4" />,
//           href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
//         },
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/pocketdoc-react-native",
//         },
//       ],
//     },
//     {
//       title: "SpaceApps Waterloo",
//       dates: "April 28th - 30th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/earthwatch",
//         },
//       ],
//     },
//     {
//       title: "MHacks 9",
//       dates: "March 24th - 26th, 2017",
//       location: "Ann Arbor, Michigan",
//       description:
//         "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/threejs-planes",
//         },
//       ],
//     },
//     {
//       title: "StartHacks I",
//       dates: "March 4th - 5th, 2017",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
//       win: "1st Place Winner",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-ionic",
//         },
//         {
//           title: "Source (Server)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/recipic-rails",
//         },
//       ],
//     },
//     {
//       title: "QHacks II",
//       dates: "February 3rd - 5th, 2017",
//       location: "Kingston, Ontario",
//       description:
//         "Developed a mobile game which enables city-wide manhunt with random lobbies",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
//       mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
//       links: [
//         {
//           title: "Source (Mobile)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/dillionverma/human-huntr-react-native",
//         },
//         {
//           title: "Source (API)",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/mattBlackDesign/human-huntr-rails",
//         },
//       ],
//     },
//     {
//       title: "Terrible Hacks V",
//       dates: "November 26th, 2016",
//       location: "Waterloo, Ontario",
//       description:
//         "Developed a mock of Windows 11 with interesting notifications and functionality",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
//         },
//       ],
//     },
//     {
//       title: "Portal Hackathon",
//       dates: "October 29, 2016",
//       location: "Kingston, Ontario",
//       description:
//         "Developed an internal widget for uploading assignments using Waterloo's portal app",
//       image:
//         "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
//       links: [
//         {
//           title: "Source",
//           icon: <Icons.github className="h-4 w-4" />,
//           href: "https://github.com/UWPortalSDK/crowmark",
//         },
//       ],
//     },
//   ],
// } as const;
