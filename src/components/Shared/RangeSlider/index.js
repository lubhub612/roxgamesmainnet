import React, { useCallback, useEffect, useState, useRef } from "react";
import { RangeSliderContainer } from "./styles";

export default function RangeSlider({ min, max, minv, maxv, onChange, unit }) {
  const [minVal, setMinVal] = useState(minv);
  const [maxVal, setMaxVal] = useState(maxv);
  const [minSetting, setMinSetting] = useState(min);
  const [maxSetting, setMaxSetting] = useState(min);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 50),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    setMinSetting(min);
    setMaxSetting(max);
    setMinVal(min);
    setMaxVal(max);
  }, [min, max]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div>
      <RangeSliderContainer>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={"thumb thumb--zindex-3 thumb--zindex-5"}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />

        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>

        <div className="display-values">
          <div className="display-min-value">
            <div className="display-value min-value">
              {minVal?.toFixed()} <span>{unit ? ` ${unit}` : "$"}</span>
            </div>
          </div>
          <div className="display-to">to</div>
          <div className="display-max-value">
            <div className="display-value max-value">
              {maxVal?.toFixed()} <span>{unit ? ` ${unit}` : "$"}</span>
            </div>
          </div>
        </div>
      </RangeSliderContainer>
    </div>
  );
}
