import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false) // State to manage dropdown visibility

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // Function to handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setIsOpen(false) // Close the dropdown after selection
  }

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="dropdown-btn">
        <i className="fa-brands fa-dribbble"></i>
      </button>

      {isOpen && (
        <ul className="dropdown-menu clean-list">
          <li onClick={() => changeLanguage('en')}>English</li>
          <li onClick={() => changeLanguage('he')}>עברית (Hebrew)</li>
          {/* Add more languages here if needed */}
        </ul>
      )}
    </div>
  )
}
