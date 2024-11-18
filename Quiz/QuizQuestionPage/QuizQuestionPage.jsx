import React, { useState } from 'react';
import './QuizQuestionPage.css';
import ButtonNavigate from '../../../components/Navigation/Buttons/ButtonNavigate/ButtonNavigate';
import useFetchQuizQuestion from '../../../fetchEndpoints/fetchQuizQuestion';
import strings from '../../../navigationStrings.json';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useNavigation hook
import { combinationColorMapping } from '../../../colorMapping';

const QuizQuestionPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const email = route.params.email;
    const subUser = route.params.subUser !== undefined && route.params.subUser === true ? true : false;
    const changingColors = route.params?.changingColors !== undefined  && route.params.changingColors == true ? true : false;

    const getMappingId = (result1, result2, resultI) => {
        const combination = `${resultI + "ed"} ${result1} ${result2}`;
        for (const [mappingId, combinationString] of Object.entries(combinationColorMapping)) {
            if (combinationString === combination) {
            return parseInt(mappingId); // Convert mappingId to integer
        }
        }
        // Return null if no matching combination is found
        return null;
    }

    const handleQuizSubmit = (mappingId, email, summary) => {
        navigation.navigate(strings.quizResultsPage, { mappingId, email, summary, changingColors, subUser});
    }

    const [count, setCount] = useState(1); // Initialize count state
    const [quizId, setQuizId] = useState(1);

    // This is utilized to keep track of the colors of the grey buttons so they only highlight once clicked
    const [selectedOption, setSelectedOption] = useState(null);
    const { quizQuestion, quizResult } = useFetchQuizQuestion(quizId);

    const quizInstructions = `Choose the approach / mindset that\nsuits you the best`;

    //Part of Progress Bar
    const handleButtonClick = async () => {
        if(selectedOption !== null) {
            setCount(prevCount => prevCount + 1);
            if(selectedOption == "option1") {
                setQuizId(quizQuestion.nextQidIf1); 
            } 
            else {
                setQuizId(quizQuestion.nextQidIf2);
            }
            setSelectedOption(null);
        }
    };

    //Part of quiz anser selections
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <>
            {/* This is utilized to have the number of question progress bars up to date (right now I have 6) */}
            <div className="quiz-progress-container">
                {/* Render circles with different colors based on the count value */}
                {[...Array(4)].map((_, index) => (
                    <svg key={index} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="4.5" fill={index < count ? "#7D0096" : "white"} stroke="#7D0096" />
                    </svg>
                ))}
            </div>

            {quizQuestion && !quizResult && (
                <>
                <div className="quiz-question-container">
                        <div className="quizInstructions">{quizInstructions}</div>
                        <div className="quizQuestion">{quizQuestion.questionText}</div>
                        <button
                            onClick={() => handleOptionClick("option1")}
                            className={selectedOption === "option1" ? "option1 selected" : "option1"}
                        >
                            {quizQuestion.answerText1}
                        </button>
                        <button
                            onClick={() => handleOptionClick("option2")}
                            className={selectedOption === "option2" ? "option2 selected" : "option2"}
                        >
                            {quizQuestion.answerText2}
                        </button>
                    </div>
                    <div className="quiz-question-button-container">
                            {/* Call handleButtonClick when the button is clicked */}
                            {count === 4 ? <ButtonNavigate buttonText="See My Results" onClick={handleButtonClick} /> : 
                            <ButtonNavigate buttonText="Confirm" onClick={handleButtonClick} />
                            }
                    </div>
                </>
            )}

            {/* TODO: NAVIGATE TO SEE YOUR RESULTS PAGE, SEND QUIZRESULTS ENTITY */}
            {quizResult && (handleQuizSubmit(getMappingId(quizResult.resultPrimary, quizResult.resultSecondary, quizResult.resultInteractionStyle), email, quizResult.resultSummary, changingColors, subUser))}
        </>
    );
};

export default QuizQuestionPage;
