import { useState, useCallback } from 'react';

type PressEffectReturn = {
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  style: React.CSSProperties;
  isPressed: boolean;
};

/**
 * usePressEffect
 * Provides props and style for a press (active) effect, suitable for buttons and interactive elements.
 *
 * @param effectStyle Optional: custom style to apply when pressed
 * @returns { onMouseDown, onMouseUp, onMouseLeave, style, isPressed }
 */
export function usePressEffect(effectStyle?: React.CSSProperties): PressEffectReturn {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = useCallback(() => setIsPressed(true), []);
  const handleMouseUp = useCallback(() => setIsPressed(false), []);
  const handleMouseLeave = useCallback(() => setIsPressed(false), []);

  const style = isPressed
    ? {
        transform: 'scale(0.96)',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,0.08) inset',
        transition: 'transform 0.1s cubic-bezier(.4,0,.2,1)',
        ...effectStyle,
      }
    : { transition: 'transform 0.1s cubic-bezier(.4,0,.2,1)' };

  return {
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseLeave,
    style,
    isPressed,
  };
}
