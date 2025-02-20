import "./App.css";
import { quotes as quotesData} from "./quotes";
import { useState } from "react";
import { QuoteBox } from "./components/QuoteBox";
import { Title } from "./components/Title";

function App() {
  const [quotes, setQuotes] = useState(quotesData);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [likeCount, setLikeCount] = useState({});
  const [dislikeCount, setDisLikeCount] = useState({});
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  function handleNewQuoteClick() {
    const newIndex = getRandomQuoteIndex();
    setQuoteIndex(newIndex);
  }

  function handleLikeClick() {
    setLikeCount((prev) => ({
      ...prev,
      [quoteIndex]: (prev[quoteIndex] || 0) + 1,
    }));
  }

  function handleDislikeClick() {
    setDisLikeCount((prev) => ({
      ...prev,
      [quoteIndex]: (prev[quoteIndex] || 0) + 1,
    }));
  }

  return (
    <div className="App">
      <Title>Random Quotes</Title>
      <QuoteBox
        quote={quotes[quoteIndex].quote}
        author={quotes[quoteIndex].author}
        onNewQuoteClick={handleNewQuoteClick}
        onLikeClick={handleLikeClick}
        onDislikeClick={handleDislikeClick}
        likeCount={likeCount[quoteIndex] || 0} 
        dislikeCount={dislikeCount[quoteIndex] || 0} 
      />
      
    </div>
  );
}

export default App;
