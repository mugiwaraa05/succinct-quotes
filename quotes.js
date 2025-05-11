const clickSound = new Audio("click.mp3"); 
clickSound.volume = 0.4; 
const tweetSound = new Audio("tweet.mp3"); 
tweetSound.volume = 0.4; 


const quotes = [
    {
        quote: "2025 is the year ZK goes mainstream.",
        author: "Succinct labs"
    },
    {
        quote: "The thiccer the blocks, the bigger the proofs.",
        author: "Uma Roy"
    },
    {
        quote: "Is succinct labs doing an airdrop.",
        author: "Ansem"
    },
    {
        quote: "You can't spell Success without Succinct",
        author: "Anon"
    },
    {
        quote: "They have zero knowledge I generate proofs at Succinct Labs.",
        author: "Succinct labs"
    },
    {
        quote: "WTF?! Are you serious?! Why is it so cheap?!.",
        author: "SP1 intern"
    },
    {
        quote: "f you ever see me tweeting purely educational content for weeks at a time, call the FBI. That is not me.",
        author: "Advaith"
    },
    {
        quote: "The quickest way to my heart is to mention my magnum opus: Double Cup Dash.",
        author: "Advaith"
    },
    {
        quote: "I just scored 10 / 10 on truthlens round 13.",
        author: "Anon"
    },
    {
        quote: "What if Stage 2 was a rocket simulator and you could go to the moon?..",
        author: "Advaith"
    },
    {
        quote: "Feeling down,Girlfriend left you and you're going insane? Yap about Succinct.",
        author: "Shalen"
    },
    {
        quote: "0xCrashout pls gib code ..I wrote 3 threads.",
        author: "Succinct threadoor"
    },
    {
        quote: "Can we go multipliers for multipliers?.",
        author: "Shalen"
    },
    {
        quote: "Want proof? There's a vApp for that.",
        author: "Steve Jobz"
    },
    {
        quote: "Just sold my house to buy an RTX 4090.",
        author: "Dabs"
    },
    {
        quote: "You think you understand Succinct? Then prove it!",
        author: "Mugiwara"
    },
    {
        quote: "The future will run on proofs. Succinct will be its engine.",
        author: "Serkan"
    },
    {
        quote: "Without community, there would be nothing.",
        author: "Stepsaks"
    },
    {
        quote: "Succinct creates a new branch in the cryptoindustry.",
        author: "Makise"
    },
    {
        quote: "Succinct found the zkvm edge , paradigm knows it too. ",
        author: "aixbt agent"
    },
    {
        quote: "Zero-knowledge proofs are math that defend your freedom",
        author: "John Guibas"
    },
    {
        quote: "At this time we're not taking investment, thank you!",
        author: "Uma Roy"
    },
    {
        quote: "Wtf I had 526 score yet only got 2 stars? Fuck this game.",
        author: "Wylo"
    },
    {
        quote: "ZK is going mainstream and Succinct is in the lead.",
        author: "Wylo"
    },
    {
        quote: "No worries intern, my rtx ultrarice promax 9870 can handle it..",
        author: "Zksybil"
    },
    {
        quote: "I just scored 6 / 10 on truthlens round 13.",
        author: "Zaharon"
    },
    {
        quote: "Its the weekend go prove some grass.",
        author: "Mugiwara"
    },
    {
        quote: "He who has nothing to lose can afford all risks.",
        author: "OxCrashout"
    },
    {
        quote: "Mark my words, by Tuesday 2048 will be GONE.",
        author: "Advaith"
    },
    {
        quote: "Not joining Succinct rn is like not buying BTC in 2010.",
        author: "Advaith"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const generateBtn = document.getElementById("generate-btn");
const tweetBtn = document.getElementById("tweet-btn");

generateBtn.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.play();
        isPlaying = true;
        musicIcon.src = "images/unmute.png";
      }
    clickSound.currentTime = 0; 
    clickSound.play();
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = selectedQuote.quote;
    authorElement.textContent = selectedQuote.author;
    quoteElement.classList.remove("animate-quote");
    authorElement.classList.remove("animate-quote");

    void quoteElement.offsetWidth;
    void authorElement.offsetWidth;

    quoteElement.classList.add("animate-quote");
    authorElement.classList.add("animate-quote");
    const authorImage = document.getElementById("author-image");
const imageFileName = selectedQuote.author.toLowerCase().replace(/\s+/g, "_").replace(/\W/g, "") + ".jpg";
console.log(`images/authors/${imageFileName}`);
authorImage.src = `images/authors/${imageFileName}`;

});
tweetBtn.addEventListener("click", () => {
    tweetSound.currentTime = 0; 
    tweetSound.play();
    const quoteText = quoteElement.textContent;
    const authorText = authorElement.textContent;
    const tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quoteText)}" - ${encodeURIComponent(authorText)}`;

    window.open(tweetUrl, "_blank");
});
const bgMusic = new Audio("background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;

let isPlaying = false;

const musicToggleBtn = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");


musicToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent retriggering the first play

  if (bgMusic.muted) {
    bgMusic.muted = false;
    musicIcon.src = "images/unmute.png";
  } else {
    bgMusic.muted = true;
    musicIcon.src = "images/mute.png";
  }
});
const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", () => {
  const quoteBox = document.querySelector(".quote-box");
  const buttons = quoteBox.querySelectorAll("button");

  // Force inline styles for clarity
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");

  // Save original styles to restore later
  const originalQuoteStyles = {
    color: quote.style.color,
    opacity: quote.style.opacity,
    filter: quote.style.filter
  };
  const originalAuthorStyles = {
    color: author.style.color,
    opacity: author.style.opacity,
    filter: author.style.filter
  };

  // Apply strong styles to make sure it's pure black
  quote.style.color = "#000";
  quote.style.opacity = "1";
  quote.style.filter = "none";

  author.style.color = "#000";
  author.style.opacity = "1";
  author.style.filter = "none";

  // Hide buttons before capture
  buttons.forEach(btn => btn.style.visibility = "hidden");

  html2canvas(quoteBox, {
    backgroundColor: "#ffffff",
    scale: 2,
    useCORS: true
  }).then(canvas => {
    // Restore styles
    quote.style.color = originalQuoteStyles.color;
    quote.style.opacity = originalQuoteStyles.opacity;
    quote.style.filter = originalQuoteStyles.filter;

    author.style.color = originalAuthorStyles.color;
    author.style.opacity = originalAuthorStyles.opacity;
    author.style.filter = originalAuthorStyles.filter;

    // Show buttons
    buttons.forEach(btn => btn.style.visibility = "visible");

    const link = document.createElement("a");
    link.download = "succinct-quote.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
