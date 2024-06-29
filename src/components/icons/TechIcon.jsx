import propTypes from 'prop-types'

function TechIcon({ imageUrl, alt }) {
    return (

        <img src={imageUrl} alt={alt} />

    )
}

TechIcon.propTypes = {
    imageUrl: propTypes.string.isRequired,
    alt: propTypes.string.isRequired
}

export default TechIcon
{/* style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            border: '2px solid #1E2D3D',
            backgroundColor: 'transparent',
            borderRadius: '12px',
        }}*/}