import React, { useState, useEffect } from "react";
import styles from "../styles/typewriter-cursor.module.css";

interface props {
  texts: string | string[];
  writeSpeed?: number;
  eraseSpeed?: number;
}

const Typewriter = ({ texts, writeSpeed = 250, eraseSpeed = 150 }: props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentText = Array.isArray(texts) ? texts[index] : texts;
    let timer: any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentText.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentText.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);
      }, writeSpeed);
    }

    if (!isDeleting && subIndex === currentText.length) {
      if (Array.isArray(texts)) {
        setIsDeleting(true);
      }
    }

    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex(
        (prev) => (prev + 1) % (Array.isArray(texts) ? texts.length : 1)
      );
    }

    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, index, texts, writeSpeed, eraseSpeed]);

  return (
    <div className="flex items-center ">
      {text}
      <span className={`${styles.typewriter_cursor}`}></span>
    </div>
  );
};

export default Typewriter;
