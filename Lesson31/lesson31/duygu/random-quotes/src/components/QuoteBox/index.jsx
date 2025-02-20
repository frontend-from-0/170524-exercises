export function QuoteBox({ quote, author, onNewQuoteClick, onLikeClick, onDislikeClick, likeCount, dislikeCount }) {
  return (
    /* <></> is called Fragmet element and it's used to add a parent wrapper around element on the same level */
    <>
      <div>
        <p>{quote}</p>
        <span>{author}</span>
        
          <button onClick={onLikeClick}>Like {likeCount}</button>
          <button onClick={onDislikeClick}>Dislike {dislikeCount} </button>
      
      </div>
      <button onClick={onNewQuoteClick}>New Quote</button>
    </>
  );
}
