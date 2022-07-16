import { useState, useEffect, useRef } from 'react'

export const useComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] = useState(
    initialIsVisible
	)
	
  const ref = useRef(null)
  const refChildren = useRef(null)

  const handleHideDropdown = (event) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false)
    }
  }

  // const handleClickOutside = event => {
  //   if (ref.current && event.target.className !== 'MuiAutocomplete-option' && !ref.current.contains(event.target)) {
  //     setIsComponentVisible(false)
  //   }
  // }

  useEffect(() => {
		if (!isComponentVisible) return

    document.addEventListener('keydown', handleHideDropdown, true)
		// document.addEventListener('click', handleClickOutside, true)
		
    return () => {                    
      document.removeEventListener('keydown', handleHideDropdown, true)
      // document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, refChildren, isComponentVisible, setIsComponentVisible }
}