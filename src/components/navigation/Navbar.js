import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Navbar.scss'
import ProfileController from '../../containers/profile/Profile.js'
import Glossary from '../glossary/Glossary.js'
import DialogSelect from '../selectLanguage/selectLanguage'
import claw from '../../assets/claw.png'

function Navbar () {
	return (
		<div id="header-contents">
			<img src={claw} alt="Panthera" width="40" height="40"></img>
			<Link to="/"> <h4>PANTHERA PLATFORM</h4></Link>
      <div id="acc-controls">
        <Glossary />
				<DialogSelect />
      	<ProfileController />
      </div>
		</div>
	)
}

export default Navbar