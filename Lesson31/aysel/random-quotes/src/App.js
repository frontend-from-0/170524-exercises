import "./App.css";
import { quotes as quotesData } from "./quotes";
import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox";
import { Title } from "./components/Title";

function App() {
  const [quotes, setQuotes] = useState(quotesData);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [likeCounts, setLikeCounts] = useState(Array(quotes.length).fill(0));
  const [dislikeCounts, setDislikeCounts] = useState(Array(quotes.length).fill(0));

  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  function handleNewQuoteClick() {
    setQuoteIndex(getRandomQuoteIndex());
  }

  function handleLikeClick() {
    const newLikeCounts = [...likeCounts];
    newLikeCounts[quoteIndex] += 1;
    setLikeCounts(newLikeCounts);
  }

  function handleDislikeClick() {
    const newDislikeCounts = [...dislikeCounts];
    newDislikeCounts[quoteIndex] += 1;
    setDislikeCounts(newDislikeCounts);
  }

  return (
    <div className="App">
      <Title>Random Quotes</Title>
      <QuoteBox
        quote={quotes[quoteIndex].quote}
        author={quotes[quoteIndex].author}
        onNewQuoteClick={handleNewQuoteClick}
        likeCount={likeCounts[quoteIndex]}
        dislikeCount={dislikeCounts[quoteIndex]}
        onLikeClick={handleLikeClick}
        onDislikeClick={handleDislikeClick}
      />
    </div>
  );
}

export default App;
