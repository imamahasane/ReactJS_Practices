// const todoDate = '29-11-22';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(props) {
  const { titleText, descText } = props;
  return (
    <div className="card">
      <h3 className="cardTitle">{titleText}</h3>
      <p className="cardDesc">{descText}</p>
      <p className="cardFooter">
        {dateName + '-' + monthName + '-' + yearName}
      </p>
    </div>
  );
}

export default Card;
