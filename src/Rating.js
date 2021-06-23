function Rating(props) {
  let value = Math.round(props.children);
  let emptyStar = '☆';
  let fullStar = '★';
  let stars = fullStar.repeat(value) + emptyStar.repeat(5 - value);
  return (
    <div>
      <h2>{stars}</h2>
    </div>
  );
}
export default Rating;
