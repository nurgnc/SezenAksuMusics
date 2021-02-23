import {Header, Sidebar, Canvas} from '../';
import '../Sidebar/style.css'

const Home = (props) =>{
    return (
    <div>
        <Header/>
        <div className="row sidebar-menu" >
            <div className="col-2 sidebar-menu"><Sidebar/></div>
            <div className="col-8">{props.children}</div>
            <div className="col-2"><Canvas/></div>
        </div> 
    </div>
    );
}

export default Home;