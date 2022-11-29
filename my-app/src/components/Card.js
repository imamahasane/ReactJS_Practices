const todoTitle = 'Imam Ahasan';
const todoDesc =
  'Ad amet esse esse labore irure pariatur do esse cupidatat.Consectetur Lorem aliqua et ex officia veniam aliquip incididunt dolor ex exercitation amet incididunt.';
// const todoDate = '29-11-22';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card() {
  return (
    <div className="card">
      <h3 className="cardTitle">{todoTitle}</h3>
      <p className="cardDesc">{todoDesc}</p>
      <p className="cardFooter">
        {dateName + '-' + monthName + '-' + yearName}
      </p>
    </div>
  );
}

export default Card;
