function Rating(props) {
  let stars = Math.round(props.children);
  let result = '';
  for (let j = 0; j < stars; j++) {
    for (let i = 0; i < stars; i++) {
      if (i < stars) {
        result = `&#9734`;
      } else {
        result = `	&#9733`;
      }
    }
  }

  return <div className="container">{result}</div>;
}

export default Rating;