import React, { useState, useEffect } from 'react'

const Loader = () => {
  const [greet, setGreet] = useState(0)
  const greetings = [
    "Hello",       // English
    "नमस्कार",     // Hindi
    "こんにちは",     // Japanese (Konnichiwa)
    "Bonjour",     // French
    "Hola",        // Spanish
    "Ciao",        // Italian
    "Olá",         // Portuguese
    "Hallo",       // German
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setGreet((prev) => (prev + 1) % greetings.length)
    }, 600) 

    return () => clearInterval(interval) 
  }, [greetings.length])

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white animate-[fadeIn_1s_ease-in-out_infinite_alternate]">
        {greetings[greet]}
      </h1>
    </div>
  )
}

export default Loader