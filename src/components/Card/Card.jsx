import "./styles.css";

function Card() { // начало функционального компонента
  return ( // то, что появится на экране
    // класс card_component нужен для того, чтобы в CSS можно было настроить стили
    <div className="card_component">
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"
        alt="Simpson Avatar"
      />
      <h2 className="card_title">Homer Simpson</h2>
      <p className="card_info">
        Occupation: <p>Safety Inspector at Springfield Nuclear Power Plant
      </p>
      </p>
      <p className="card_info">
        Hobbies: <p>Eating donuts, Watching TV, Drinking Duff Beer, Sleeping
      </p>
      </p>
    </div>
  );
}

export default Card;
