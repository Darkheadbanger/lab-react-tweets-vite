function Tweet({ tweet }) {
  return (
    <div className="top">
      <span className="user">
        <span className="name">{tweet.user.name}</span>
        <span className="handle">@{tweet.user.handle}</span>
      </span>

      <span className="timestamp">{tweet.timestamp}</span>
    </div>
  );
}

export default Tweet;
