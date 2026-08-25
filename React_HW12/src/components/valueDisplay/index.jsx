import { useRef, useEffect } from 'react';

function ValueDisplay({ value }) {
  const previousValueRef = useRef('');

  const prevValue = previousValueRef.current;

  useEffect(() => {
    previousValueRef.current = value;
  }, [value]);

  return (
    <div className="display-box">
      <p className="display-text">
        Текущее значение: <span className="current-highlight">"{value}"</span>
      </p>
      <p className="display-text">
        Предыдущее значение: <span className="previous-highlight">"{prevValue}"</span>
      </p>
    </div>
  );
}

export default ValueDisplay;
