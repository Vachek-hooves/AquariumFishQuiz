import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../../const/colors';

const QuizDetails = ({quizData}) => {
  const navigation = useNavigation();
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

  const renderNextQuestion = () => {
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

  const navigateGameScreen = () => {
    navigation.navigate('GameScreen');
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      <Question question={QUESTIONS[currentQuestionIndex].question} />
      <Options
        options={QUESTIONS[currentQuestionIndex].options}
        onPress={validationAnswer}
        isDisable={disableOption}
        correctOption={correctOption}
        currentOption={currentOption}
      />
      {activeNextBtn && <NextBtn onPress={renderNextQuestion} />}
      <Modal visible={isModal} animationType="slide" transparent={true}>
        <ModalWindow
          score={quizScore}
          restart={() => restartQuiz()}
          mainMenuNav={navigateGameScreen}
        />
      </Modal>
    </View>
  );
};

const Question = ({question}) => {
  return (
    <View>
      <Text>{question}</Text>
    </View>
  );
};

const Options = ({
  options,
  onPress,
  isDisable,
  correctOption,
  currentOption,
}) => {
  return (
    <View style={{gap: 10}}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(option)}
          disabled={isDisable}
          style={{
            backgroundColor:
              option == correctOption
                ? 'green'
                : option == currentOption
                ? 'red'
                : 'white',
          }}>
          <Text style={{fontSize: 20}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const NextBtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{fontSize: 20}}>Continue</Text>
    </TouchableOpacity>
  );
};

const ModalWindow = ({score, restart, mainMenuNav}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR.darkBlue + 90,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: COLOR.white}}>
          your score for this subject is{score}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default QuizDetails;

const styles = StyleSheet.create({});
