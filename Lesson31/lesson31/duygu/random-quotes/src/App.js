import "./App.css";
import { quotes as quotesData} from "./quotes";
import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox";
import { Title } from "./components/Title";

function App() {
  const [quotes, setQuotes] = useState(quotesData);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDisLikeCount] = useState(0);
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  function handleNewQuoteClick() {
    setQuoteIndex(getRandomQuoteIndex());
  }

  function handleLikeClick() {
    setLikeCount((count) => count+1);
  }

  function handleDislikeClick() {
    setDislikeLikeCount((count) => count+1);
  }

  return (
    <div className="App">
      <Title>Random Quotes</Title>
      <QuoteBox
        quote={quotes[quoteIndex].quote}
        author={quotes[quoteIndex].author}
        onNewQuoteClick={handleNewQuoteClick}
      />
      <div className="buttons">
        <button onClick={handleLikeClick} className="like-button"> Like ({likeCount}) </button>
        <button onClick={handleDislikeClick} className="dislike-button"> Dislike ({dislikeCount}) </button>
      </div>
    </div>
  );
}

export default App;
