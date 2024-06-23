import MysqlIcon from '../../assets/mysql.svg'
import '../../App.css'
function MysqlTechIcon() {
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
            <img src={MysqlIcon} alt="node js" />
        </div>
    )
}

export default MysqlTechIcon