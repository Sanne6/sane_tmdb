import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
	text: string
	link: string
	icon: any
}

const NavigationItem = ({ text, link, icon }: Props) => {
	return (
		<NavLink
			to={link}
			className={({ isActive }) => 'navigation-item' + (isActive ? ' active' : '')}>
			<div className="navigation-item-icon">
				<FontAwesomeIcon icon={icon} />
			</div>
			<span>{text}</span>
		</NavLink>
	)
}

export default NavigationItem
