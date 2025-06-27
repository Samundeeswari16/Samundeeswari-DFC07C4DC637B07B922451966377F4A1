import React, { useState } from 'react';

function CheckboxMessage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Checkme
      </label>

      {isChecked && <p>You checked the box</p>}
    </div>
  );
}

export default CheckboxMessage;
