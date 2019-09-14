import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from '../theme';
import '../App.css';

const Head = styled.header`
  display: flex;
  justify-content: center;
  padding-top: 2em;
  padding-bottom: 3em;
`;

const Span = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${Colors.darkGrey};
`;

// TODO: Proptypes
export default function Header() {
  return (
    <div>
      <Head>
        <NavLink className="link" exact activeClassName="active" to="/">
          <Span>TODO</Span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/backlog">
          <Span>BACKLOG</Span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/data">
          <Span>DATA</Span>
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/test">
          <Span>TEST</Span>
        </NavLink>
      </Head>
    </div>
  );
}
