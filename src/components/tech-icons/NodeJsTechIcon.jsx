import Nodejs from '../../assets/nodejs.svg'
import '../../App.css'
function NodeJsTechIcon() {
    return (
        <div style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '15px',
            border: '2px solid #1E2D3D',
            backgroundColor: 'transparent',
            borderRadius: '12px',
        }}>
            <img src={Nodejs} alt="node js" />
        </div>
    )
}

export default NodeJsTechIcon