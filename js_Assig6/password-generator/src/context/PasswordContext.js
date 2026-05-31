import { createContext, useState } from "react"

export const PasswordContext = createContext()

function PasswordProvider({ children }) {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(10)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  function generatePassword() {

    let chars = "abcdefghijklmnopqrstuvwxyz"

    if (includeUppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (includeNumbers) {
      chars += "0123456789"
    }

    if (includeSymbols) {
      chars += "!@#$%^&*()"
    }

    let generatedPassword = ""

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length)

      generatedPassword += chars[randomIndex]
    }

    setPassword(generatedPassword)
  }

  return (
    <PasswordContext.Provider
      value={{
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
      }}
    >
      {children}
    </PasswordContext.Provider>
  )
}

export default PasswordProvider