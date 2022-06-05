import { Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Dashboard.css';

import PetList from '../PetList';

const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>

            <nav>
                <Link to="types">Types</Link>
            </nav>

            <section>
                <Routes>
                    <Route path="/" element={<PetList />} />
                    <Route path="/types" element={<><p> Types ... </p></>} />
                </Routes>
            </section>

            {/* <img src={logo} title="logo" alt="new_logo" /> */}
            <Logo className='logo'/>

        </section>
    );
}

export default Dashboard;