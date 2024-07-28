import {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const QuizDetails = ({quizData}) => {
  const QUESTIONS = quizData.levelQuestions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOption, setCurrentOptions] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [disableOption, setDisableOption] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [timerOff, setTimerOff] = useState(false);

  const isTimerOver = () => {
    setIsModal(true);
  };
  useEffect(() => {
    if (timerOff) {
      isTimerOver();
    }
  }, [timerOff]);

  const validationAnswer = choosenOption => {
    const answer = QUESTIONS[currentQuestionIndex].answer;
    setCurrentOptions(choosenOption);
    setCorrectOption(answer);
    setDisableOption(true);
    if (choosenOption === answer) {
      setQuizScore(quizScore + 1);
    }
    setActiveNextBtn(true);
  };

  const renderNextQuestin = () => {
    if (currentQuestionIndex == QUESTIONS.length - 1) {
      setIsModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptions(null);
      setCorrectOption(null);
      setDisableOption(false);
      setActiveNextBtn(false);
    }
  };

  const restartQuiz = () => {
    console.log('restart quiz init');
    setIsModal(false);
    setCurrentQuestionIndex(0);
    setCurrentOptions(null);
    setCorrectOption(null);
    setQuizScore(0);
    setActiveNextBtn(false);
    setTimerOff(false);
  };

  return (
    <View>
      <Text>QuizDetails</Text>
    </View>
  );
};

export default QuizDetails;

const styles = StyleSheet.create({});
