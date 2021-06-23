function Greetings(props) {
  let saudação = '';
  if (props.lang === 'de') {
    saudação = `Hallo ${props.children}`;
  } else if (props.lang === 'en') {
    saudação = `Hello ${props.children}`;
  } else if (props.lang === 'es') {
    saudação = `Hola ${props.children}`;
  } else if (props.lang === 'fr') {
    saudação = `Bonjour ${props.children}`;
  }
  return <div className="table table-striped ">{saudação}</div>;
}

export default Greetings;
