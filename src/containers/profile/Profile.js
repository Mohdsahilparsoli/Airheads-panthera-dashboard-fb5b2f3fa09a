/* eslint-disable no-unused-vars */
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import React from 'react'
import ProfileContent from './ProfileContent'
import { useComponentVisible } from '../../helpers/customHooks'

function ProfileController () {

	const {
    ref,
    isComponentVisible,
    setIsComponentVisible
  } = useComponentVisible(false)

	
	const handleClick = () => {
		setIsComponentVisible(!isComponentVisible)
	}

	return (
		<div ref={ref}>
			{isComponentVisible ? (
				<div>
					<div onClick={handleClick}><AccountCircleIcon /></div>
					<ProfileContent onClick={(type) => {
						if (type === 'myProfile') handleClick()
					}}/>
				</div>
			) : (
					<div onClick={handleClick}><AccountCircleIcon /></div>
			)}
		</div>
	)
}

export default ProfileController