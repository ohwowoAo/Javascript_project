const quotes = [
  {
    quote: "이 세상에 보장된 것은 아무것도 없으며 오직 기회만 있을 뿐이다",
    author: "General Douglas MacArthur",
  },
  {
    quote:
      "완벽이 아닌 성공을 목표로 하라, 틀릴 권리를 결코 포기하지 마라, 나아갈 능력을 잃지 마라.",
    author: "Dr. David M. Burns",
  },
  {
    quote:
      "인생에서 성공하는 이는 꾸준히 목표를 바라보며 한결같이 그를 쫒는 사람이다. 그것이 헌신이다",
    author: "Cecil B. DeMille",
  },
  {
    quote:
      "가장 위대한 영광은 한 번도 실패하지 않음이 아니라 실패할 때마다 다시 일어서는 데에 있다",
    author: "Confucius",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다",
    author: "Albert Einstein",
  },
  {
    quote:
      "게으름은 즐겁지만 괴로운 상태다. 우리는 행복해지기 위해서 무엇인가 하고 있어야 한다",
    author: "Mahatma Gandhi",
  },
  {
    quote: "성공한 사람이 아니라 가치있는 사람이 되기 위해 힘쓰라",
    author: "Albert Einstein",
  },
  {
    quote: "우리가 이룬 것만큼, 이루지 못한 것도 자랑스럽습니다",
    author: "Steve Jobs",
  },
  {
    quote:
      "한 인간의 가치는 그가 무엇을 받을 수 있느냐가 아니라 무엇을 주느냐로 판단된다",
    author: "Albert Einstein",
  },
  {
    quote: "무엇을 비웃는가보다 한 인간의 성격을 더 잘 보여주는 것은 없다",
    author: "Johann Wolfgang von Goethe",
  },
];

const quote = document.querySelector(".quote span.famousSay");
const author = document.querySelector(".quote span.author");
const dateBox = document.querySelector(".dateBox");

const quotesTxt = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quotesTxt.quote;
author.innerText = quotesTxt.author;

let year = new Date();
const today = year.getDate();
dateBox.innerText = "November, " + today;
