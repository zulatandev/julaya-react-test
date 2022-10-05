import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Map from '../../components/Map';
import { fetchAgents } from '../../redux/actions/agent.action';
import { logout } from "../../redux/actions/auth.action";
import './style.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAgents());
  },[]);

  const agents = useSelector(({ agentReducer }) => agentReducer.agents);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Map markers={agents} />
      <button className="btn-logout" onClick={handleLogout}>Log out</button>
    </div>
  )
};

export default Home;
