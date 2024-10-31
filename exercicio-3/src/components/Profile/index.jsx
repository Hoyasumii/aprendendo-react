import module from "./.module.css";

export default function Profile({ imgSrc, name }) {
    return (
        <div className={ module.profile }>
            <img src={ imgSrc } alt={ name } />
            <h2>{ name }</h2>
        </div>
    )
}