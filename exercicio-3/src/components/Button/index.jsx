import modules from "./.module.css"

export default function Button({ href, children }) {
    return (
        <a href={ href } target="_blank" rel="noopener noreferrer">
            <button className={ modules.button }>{ children }</button>
        </a>
    )
}