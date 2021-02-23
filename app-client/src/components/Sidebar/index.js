import './style.css'
import {GiMusicalNotes, GiHearts, GiHeartMinus, GiCloudDownload} from 'react-icons/gi';
import {RiPlayListFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <ul className="nav navbar-nav sidebar-list">
                    <li><Link to="/songs">{<GiMusicalNotes />} <span>Sezen Aksu Şarkıları</span></Link></li>
                    <li><Link to="/canvas">{<GiHearts/>}  <span>Favorilerim</span></Link></li>
                    <li><Link to="/">{<GiHeartMinus/>}  <span>Beğenmediklerim</span></Link></li>
                    <li><Link to="/">{<RiPlayListFill/>} <span>Diğer Şarkılar</span></Link></li>
                    <li><Link to="/">{<GiCloudDownload/>}  <span>İndirilenler</span></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;