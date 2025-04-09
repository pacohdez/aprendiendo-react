import PropTypes from 'prop-types'
import { useState } from 'react';

export function TwitterFollowCard({ formatUserName, userName, name, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) //useState Regresa un arreglo de dos estados, el primero es el nombre, segundo es la forma de actualizarlo

    const buttonClassName = isFollowing
        ? 'x-followCard-button is-following'
        : 'x-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='x-followCard'>
            <header className='x-followCard-header'>
                <img
                    className='x-followCard-avatar'
                    src={`https://unavatar.io/github/${userName}`}
                    alt="Avatar"
                />
                <div className='x-followCard-info'>
                    <strong>{name}</strong>
                    <span className='x-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='x-followCard-text'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
                    <span className='x-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

// ✅ VALIDACIÓN DE PROPS CON PROP-TYPES
TwitterFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired
};