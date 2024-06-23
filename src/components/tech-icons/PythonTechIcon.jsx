import PythonIcon from '../../assets/python.svg'
import '../../App.css'
function PythonTechIcon() {
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
            <img src={PythonIcon} alt="python" />
        </div>
    )
}

export default PythonTechIcon