export let gradients = [
  ["#a18cd1", "#fbc2eb"],
  ["#ff9a9e", "#fad0c4"],
  ["#f093fb", "#f093fb"],
  ["#43e97b", "#38f9d7"],
  ["#30cfd0", "#330867"],
  ["#4facfe", "#00f2fe"],
  ["#667eea", "#764ba2"],
  ["#9890e3", "#b1f4cf"],
  ["#ebc0fd", "#d9ded8"],
  ["#2af598", "#009efd"],
  ["#feada6", "#f5efef"],
  ["#0ba360", "#3cba92"],
  ["#00c6fb", "#005bea"],
  ["#6a85b6", "#bac8e0"],
  ["#9795f0", "#fbc8d4"],
  ["#7028e4", "#e5b2ca"],
  ["#ff0844", "#ffb199"],
  ["#ff0844", "#ffb199"],
  ["#0c3483", "#a2b6df", "#6b8cce", "#a2b6df"],
];

export let Data = [
  {
    productName: "Nike Sports Sneaker",
    campaign: "For Sport Lovers",
    description:
      "Nike React is cratfed to put you inside your new track. With comfort in mind.",
    price: 125,
    image: require("../images/2.png"),
    bgColor: gradients[Math.floor(Math.random() * gradients.length)],
  },
  {
    productName: "Nike Booster",
    campaign: "Power up your Race",
    description:
      "Nike React is cratfed to put you inside your new track. With comfort in mind.",
    price: 125,
    image: require("../images/3.png"),
    bgColor: gradients[Math.floor(Math.random() * gradients.length)],
  },
  {
    productName: "Nike Campboot",
    campaign: "Power up your Race",
    description:
      "Nike React is cratfed to put you inside your new track. With comfort in mind.",
    price: 125,
    image: require("../images/4.png"),
    bgColor: gradients[Math.floor(Math.random() * gradients.length)],
  },
  {
    productName: "Pitch Kick",
    campaign: "Improve your performance on the pitch",
    description:
      "Nike React is cratfed to put you inside your new track. With comfort in mind.",
    price: 125,
    image: require("../images/5.png"),
    bgColor: gradients[Math.floor(Math.random() * gradients.length)],
  },
];
