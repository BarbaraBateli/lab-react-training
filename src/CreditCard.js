function CreditCard(props) {
  let cc = `${props.number}`;
  let masked = '************' + cc.substr(-4);
  return (
    <div>
      <div
        class="card"
        style={{
          width: '18rem',
          backgroundColor: `${props.bgColor}`,
          color: `${props.color}`,
          height: '100',
        }}
      >
        <div className="card-body">
          <h5 className="card-title"> {props.type}</h5>
          <h5 className="card-title">{masked}</h5>
          <h5 className="card-title">{props.expirationMonth}</h5>
          <h5 className="card-title">{props.expirationYear}</h5>
          <h5 className="card-title">{props.bank}</h5>
          <h5 className="card-title">{props.owner}</h5>
        </div>
      </div>
    </div>
  );
}
export default CreditCard;
