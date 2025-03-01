import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  // console.log("Inside AnswersList: ", props)

  const { answersList, editAnswer } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem {...answerItem} key={i} editAnswer={editAnswer} />
      ))}
    </ul>
  );
}
