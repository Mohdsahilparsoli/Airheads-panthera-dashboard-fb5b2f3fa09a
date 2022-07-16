import React from 'react'
import HelpIcon from '@material-ui/icons/Help'
import GlossaryContent from './GlossaryContent'
import { useComponentVisible } from '../../helpers/customHooks'

function Glossary () {

	const {
    ref,
    refChildren,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)

	const handleClick = () => {
		setIsComponentVisible(!isComponentVisible)
	}

	return (
		<div ref={ref}>
			{isComponentVisible ? (
				<div ref={refChildren}>
					<div onClick={handleClick}><HelpIcon /></div>
					<GlossaryContent handleClick={handleClick}/>
				</div>
			) : (
					<div onClick={handleClick}><HelpIcon /></div>
			)}
		</div>
	)
}

export default Glossary