import { useState } from "react";

import styles from "../CaseStudy/CaseStudy.module.css"


import { InitialScreen } from "../../screens/initialScreen/IntialScreen";

import { QuizScreen } from "../../screens/quizScreen/quizScreen";
import { ReviewScreen } from "../../screens/reviewScreen/reviewScreen";


export default function CaseStudy() {
  const [isShowQuiz, setIsShowQuiz] = useState(false);
  const [isRetakeQuiz, setIsRetakeQuiz] = useState(false);
  const [isReviewQuiz, setIsReviewQuiz] = useState(false);

  const handleStartQuiz = (isShowQuiz) => {
    setIsShowQuiz(isShowQuiz);
  };

  const handleRetakeQuiz = (isRetakeQuiz) => {
    setIsRetakeQuiz(isRetakeQuiz);
    setIsReviewQuiz(false);
    setIsShowQuiz(false);
  };

  const handleReviewQuiz = (isReviewQuiz) => {
    setIsReviewQuiz(isReviewQuiz);
  };

  return (
    <div className={styles.appWrapper}>
      {!isShowQuiz ? (
        <InitialScreen
          setStartQuiz={handleStartQuiz}
          isRetakeQuiz={isRetakeQuiz}
        />
      ) : isReviewQuiz ? (
        <ReviewScreen setIsRetake={handleRetakeQuiz} />
      ) : (
        <QuizScreen
          setIsRetake={handleRetakeQuiz}
          setIsReview={handleReviewQuiz}
        />
      )}
    </div>
  );
}
