import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  sentences: string[];
  staticText: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  sentences,
  staticText,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentSentence = sentences[currentSentenceIndex];

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseDuration);
    } else if (isTyping) {
      if (currentText.length < currentSentence.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentSentence.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsTyping(true);
        setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, isPaused, currentSentenceIndex, sentences, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className="typewriter-container">
      <h1 className="typewriter-static">{staticText}</h1>
      <h2 className="typewriter-dynamic">
        {currentText}
        <span className="typewriter-cursor">|</span>
      </h2>
    </div>
  );
};
