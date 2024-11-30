import { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <div
        className="bg-secondary rounded text-center mt-5"
        style={{ width: "500px", height: "150px" }}
      >
        <h3 className="pt-3 pb-2 text-white">Password generator</h3>
        <div className="d-flex justify-content=center mb-3 px-3">
          <input
            type="text"
            value={password}
            placeholder="Password"
            readOnly
            className="form-control"
          />
          <button className="btn btn-primary">copy</button>
        </div>

        <div className="d-flex justify-content-center">
          <div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              class="form-range"
              id="customRange1"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <label htmlFor="length" className="px-2 text-warning">
            Length: {length}
          </label>
          <div className="px-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
              className="me-1"
            />
            <label htmlFor="number" className="text-warning">
              Numbers
            </label>
          </div>
          <div className="px-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="me-1"
            />
            <label htmlFor="character" className="text-warning">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default PasswordGenerator;
