export function QuoteBox({ quote, author, onNewQuoteClick, likeCount, dislikeCount, onLikeClick, onDislikeClick }) {
    return (
      /* <></> is called Fragmet element and it's used to add a parent wrapper around element on the same level */
      <>
        <div>
          <p>{quote}</p>
          <span>{author}</span>
          <div className='flex-column'>
          <div className="flex-row">
            <button onClick={onLikeClick}>
              <span>👍</span> Like {likeCount}
            </button>
            <button onClick={onDislikeClick}>
              <span>👎</span> Dislike {dislikeCount}
            </button>
          </div>

          <button onClick={onNewQuoteClick}>
            <span>✨</span> New Quote
          </button>
        </div>
        </div>
        </>

    );
  }
  