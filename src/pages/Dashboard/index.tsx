import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="logo"/>
      <Title>Dashboard</Title>
      <Form>
        <input type="text" placeholder="Digite aqui" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img src="https://avatars1.githubusercontent.com/u/38105957?s=460&u=0c53f00d85936f570494792a130cdfa0652f4c55&v=4"
          alt="Avatar"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJs & react Native forms!</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img src="https://avatars1.githubusercontent.com/u/38105957?s=460&u=0c53f00d85936f570494792a130cdfa0652f4c55&v=4"
          alt="Avatar"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJs & react Native forms!</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a href="">
          <img src="https://avatars1.githubusercontent.com/u/38105957?s=460&u=0c53f00d85936f570494792a130cdfa0652f4c55&v=4"
          alt="Avatar"/>
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJs & react Native forms!</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;