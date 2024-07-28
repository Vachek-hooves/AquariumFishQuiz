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
import {LoseFish, WinFish} from '../icons';

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
    <View
      style={{
        backgroundColor: COLOR.darkBlue + 90,
        marginVertical: 10,
        borderRadius: 8,
        height: 200,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 24,
          textAlign: 'center',
          color: COLOR.white,
          paddingVertical: 5,
          fontWeight: '600',
        }}>
        {question}
      </Text>
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
    <View style={{gap: 15, marginBottom: 20}}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onPress(option)}
          disabled={isDisable}
          style={{
            backgroundColor:
              option == correctOption
                ? COLOR.lightGreen
                : option == currentOption
                ? COLOR.coral
                : COLOR.light + 90,
            borderRadius: 8,
            paddingVertical: 5,
            height: 80,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 26, textAlign: 'center'}}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const NextBtn = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: COLOR.darkBlue,
        paddingVertical: 16,
        borderRadius: 8,
      }}>
      <Text
        style={{
          fontSize: 26,
          textAlign: 'center',
          color: COLOR.white,
          fontWeight: '700',
        }}>
        Continue
      </Text>
    </TouchableOpacity>
  );
};

const ModalWindow = ({score, restart, mainMenuNav}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLOR.blue,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <WinFish />

      <View>
        <Text style={{color: COLOR.white, fontSize: 26}}>
          Your score for this subject is {score}
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10, paddingHorizontal: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.light,
            padding: 15,
            borderColor: COLOR.coral,
            borderRadius: 8,
            marginVertical: 10,
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Save score</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: COLOR.light,
            padding: 15,
            borderColor: COLOR.coral,
            borderRadius: 8,
            marginVertical: 10,
            flex: 1,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 22}}>Play again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QuizDetails;

const styles = StyleSheet.create({});
