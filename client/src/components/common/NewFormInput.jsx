import React from 'react';
import '../../styles/new-form-input.scss';

// add styles error or available to show

const NewFormInput = ({
  displayError,
  margin,
  icon,
  label,
  width,
  value,
  onChange,
  required,
  ...otherProps
}) => {
  return (
    <React.Fragment>
      <div
        style={{ marginTop: margin, width: width }}
        className="form-input-container"
      >
        <p className="label" style={{ marginBottom: '1rem' }}>
          {label}
        </p>
        <div
          className={
            displayError ? 'input-container invalid' : 'input-container '
          }
        >
          <input
            autoCorrect="off"
            autoComplete="off"
            value={value}
            onChange={(e) => onChange(e)}
            className="input"
            {...otherProps}
            required={required}
          />

          <i className="icon">{icon}</i>
        </div>

        {/* <div className="label error" style={{marginTop: "0rem", marginBottom: "0rem", color: "#F04438"}}>
          {displayError}
        </div> */}
      </div>
    </React.Fragment>
  );
};

export { NewFormInput };
