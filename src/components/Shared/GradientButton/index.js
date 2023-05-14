import React from 'react';
import { GradientButtonContainer } from './styles';

export default function GradientButton  (props)  {

  const {
    label,
    height,
    width,
    fontSize,
    isNaked,
    isNoPadding,
    isDarkMode,
    isBlackMode,
    handleClick,
    className
  } = props

  return (
    <GradientButtonContainer
      fontSize={fontSize}
      isNoPadding={isNoPadding}
      isDarkMode={isDarkMode}
      isBlackMode={isBlackMode}
      className={className}
    >
      <button
        style={
          (height && width) ? {height: height, width: width} : null
        } 
        className={isNaked ? "btn-naked" : "btn-unnaked"} 
        onClick={handleClick}>
        {label}
      </button>
    </GradientButtonContainer>
  )
}

