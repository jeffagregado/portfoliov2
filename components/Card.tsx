import cardStyle from '../styles/Card.module.scss'
import {Props} from '../interfaces/index'

export const Card = ({children, className} : Props) => {
    return ( 
        <div className={`${cardStyle.card} ${className ? cardStyle[className] : ''}`}>
            {children}
        </div>
     );
}