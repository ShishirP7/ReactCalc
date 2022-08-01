import React, { useState } from "react";

export default function Calculatorbody() {
  const [inputs, setinput] = useState("");
  const handleClick = (e) => {
    setinput(inputs.concat(e.target.name));
  };

  const clearbtn = () => {
    setinput("");
  };

  const backspace = () => {
    setinput(inputs.slice(0, inputs.length - 1));
  };

  const equals = () => {
    setinput(eval(inputs).toString());
  };
  return (
    <div className="row-1 container body">
      <input type="text" value={inputs}></input>

      <div className="col-sm grid">
        <button id="operators" onClick={clearbtn}>
          AC
        </button>
        <button id="operators" onClick={backspace}>
          CE
        </button>
        <button id="operators" name="*" onClick={handleClick}>
          *
        </button>
        <button id="operators" name="/" onClick={handleClick}>
          /
        </button>

        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button id="operators" name="+" onClick={handleClick}>
          +
        </button>

        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>

        <button name="4" onClick={handleClick}>
          4
        </button>
        <button id="operators" name="-" onClick={handleClick}>
          -
        </button>

        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button id="equals" onClick={equals}>
          =
        </button>
      </div>
    </div>
  );
}
