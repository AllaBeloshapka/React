import "./styles.css";
//props - это возможность передавать данные из родительского компонента в дочерний. Является объектом
function Card({firstName, lastName, job, hobby, avatar}) {
  // начало функционального компонента
  // console.log(props);
  //const {firstName, lastName, job, hobby, avatar} = props;
  return (
    // то, что появится на экране
    // класс card_component нужен для того, чтобы в CSS можно было настроить стили
    <div className="card_component">
      <img className="avatar" src={avatar} alt="Avatar" />
      <h2 className="card_title">
        Fullname: {`${firstName} ${lastName}`}{" "}
      </h2>
      <p className="card_info">Occupation: {job}</p>
      <p className="card_info">Hobbies: {hobby}</p>
    </div>
  );
}

export default Card;
