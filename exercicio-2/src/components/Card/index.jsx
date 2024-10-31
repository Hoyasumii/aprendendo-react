/* eslint-disable react/prop-types */
import modules from "./component.module.css";

export default function Card({ image, children }) {

    return (
        <div className={ modules.card }>
			<div>
				<img src={ image } alt="" srcSet="" />
			</div>
			<div className={ modules.cardContent }>
				{ children }
			</div>
        </div>
    )
}