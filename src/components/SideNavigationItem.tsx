import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
	text: string
	link: string
	icon: any
}

const SideNavigationItem = ({ text, link, icon }: Props) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => 'side-navigation-item ' + (isActive ? 'active' : '')}>
			<div className="side-navigation-item-icon">
				<FontAwesomeIcon icon={icon} />
			</div>
			<div className="side-navigation-item-text">
				<span>{text}</span>
			</div>
		</NavLink>
	)
}

export default SideNavigationItem
