import { useState } from 'react'


/**
 * 
 * @returns {[boolean, string, function]}
 */
export default function useTemporaryNotification() {
  const [isVisible, setVisible] = useState(false)
  const [text, setText] = useState('')

  function showNotification(text, ms) {
    setVisible(true)
    setText(text)
    setTimeout(() => {
      setVisible(false)
    }, ms)
  }

  return [isVisible, text, showNotification]
}