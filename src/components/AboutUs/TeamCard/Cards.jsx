
import fst from "../TeamCard/resourcees/collaborat.jpg"
import  snd from "../TeamCard/resourcees/collaboration.jpg"
import trd from "../TeamCard/resourcees/3rd img.jpg"

const dummyData = [
  {
    id: 1,
    imageUrl: fst,
    question: 'How To Get The Job You Want: Secrets From A Sales Leader',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, viverra vitae nisl id,…',
  },
  {
    id: 2,
    imageUrl: snd,
    question: 'Companies hired nearly a million new workers in May, Kardinal Say',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, viverra vitae nisl id,…',
  },
  {
    id: 3,
    imageUrl: trd,
    question: 'What Sould You Do Before Going To Job Interview And Get Job ?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sapien mi, viverra vitae nisl id,…',
  }
 
];

const Cards = () => {
  return (
    <div className="cards-cont">
      {dummyData.map((data) => (
        <Card key={data.id} {...data} />
      ))}
    </div>
  );
};

const Card = ({ imageUrl, question, answer }) => {
  return (
  

    <div className="card-cont">
      <img src={imageUrl} alt="" />
      <h1 className="que">{question}</h1>
      <p className="ans">{answer}</p>
      <button className="btn" > Learn more</button>
    </div>
   
  );
};

export default Cards;