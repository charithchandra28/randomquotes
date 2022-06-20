const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quotes = [
  {
    quote:
      "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    author: "David Brinkley",
  },
  { quote: "I failed my way to success.", author: "Thomas Edison" },
  {
    quote: "I find that the harder I work, the more luck I seem to have. ",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "I have learned over the years that when one's mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
  {
    quote: "I would rather die of passion than of boredom.",
    author: "Vincent van Gogh",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor. ",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
  { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  {
    quote:
      "The question isn't who is going to let me; it's who is going to stop me.",
    author: "Ayn Rand",
  },
  {
    quote:
      "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    author: "Barack Obama",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. ",
    author: "Steve Jobs",
  },
];

function RandomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

function Generate() {
  let num = RandomNumber(0, 13);
  quote.innerHTML = quotes[num]["quote"];
  author.innerHTML = quotes[num]["author"];
}
