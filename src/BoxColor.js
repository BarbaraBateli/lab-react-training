function BoxColor(props) {
    return (
      <div
        className="container-boxcolor"
        style={{ background: `rgb(${props.r},${props.g},${props.b})` }}
      >
        <p className="center" style={{ color: 'white' }}>
          rgb({props.r},{props.g},{props.b})
        </p>
      </div>
    );
  }
  
  export default BoxColor;
