import { useContext } from "react"
import { PasswordContext } from "../context/PasswordContext"

function PasswordGenerator() {

  const {
    password,
    length,
    setLength,
    includeUppercase,
    setIncludeUppercase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    generatePassword
  } = useContext(PasswordContext)

  return (
    <div>

      <h1>Password Generator</h1>

      <input
        type="text"
        value={password}
        readOnly
      />

      <br />
      <br />

      <label>Password Length: {length}</label>

      <br />

      <input
        type="range"
        min="5"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />

        Include Uppercase
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />

        Include Numbers
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />

        Include Symbols
      </label>

      <br />
      <br />

      <button onClick={generatePassword}>
        Generate Password
      </button>

    </div>
  )
}

export default PasswordGenerator