import MongoDbIcon from '../../assets/mongodb.svg'
import '../../App.css'
function MongoDBTechIcon() {
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
            <img src={MongoDbIcon} alt="mongo db" width='20px' />
        </div>
    )
}

export default MongoDBTechIcon