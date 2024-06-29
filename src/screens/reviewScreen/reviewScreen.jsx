import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewScreen.module.css";
import appStyles from "../../components/CaseStudy/CaseStudy.module.css";
import { quizData } from "../../utils/quizData";
import { InfoToolTip } from "../../components/toolTip/InfoToolTip";
import { Question } from "../../components/question/Question";
import cx from "classnames";

export const ReviewScreen = ({ setIsRetake }) => {
  const { questions } = quizData;
  const navigate = useNavigate(); // Use the useNavigate hook

  return (
    <div className={cx(appStyles.fadeInRight, styles.reviewScreenWrapper)}>
      <div className={styles.reviewScreen}>
        <div className={styles.columnContainer}>
          <div className={styles.column}>
            {questions.slice(0, 2).map((data, index) => (
              <Question key={index} index={index} data={data} />
            ))}
          </div>
          <div className={styles.column}>
            {questions.slice(2, 4).map((data, index) => (
              <Question key={index + 2} index={index + 2} data={data} />
            ))}
          </div>
        </div>

        <div className={styles.btnDiv}>
          <InfoToolTip
            text="Click me to retake the quiz!"
            component={
              <button
                onClick={() => {
                  setIsRetake(true);
                }}
                className={styles.retakeBtn}
              >
                Retake Quiz
              </button>
            }
          />
          <button
            onClick={() => navigate("/quiz")} // Navigate to the /quiz route
            className={styles.exitBtn} // Use the same class as the retake button
          >
            EXIT to QUIZ
          </button>
        </div>
      </div>
    </div>
  );
};
