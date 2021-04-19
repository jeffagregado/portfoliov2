import cardStyle from '../styles/Card.module.scss'
import {Props} from '../interfaces/index'

export const Card = ({children} : Props) => {
    return ( 
        <div className={cardStyle.card}>
            {children}
        </div>
     );
}