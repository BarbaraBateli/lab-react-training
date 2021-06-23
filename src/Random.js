function Random(props) {
  let numRandom = Math.round(
    Math.random() * (props.max - props.min) + props.min
  );

  return (
    <div className="container table table-striped">
      <p>
        Random value between {props.min} and {props.max} => {numRandom}
      </p>
    </div>
  );
}

export default Random;
