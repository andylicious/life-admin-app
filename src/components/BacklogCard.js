import React from 'react';
import styled from 'styled-components';
import { Colors } from '../theme';

export default function BacklogCard({ bg }) {
  return (
    <div style={{ 'background-color': bg, color: '#fff', 'border-radius': '10px' }}>
      <h3>Title</h3>
      <p>Add more</p>
      <ul>
        <li>Thing 1</li>
        <li>Thing 2</li>
        <li>Thing 3</li>
        <li>Thing 4</li>
      </ul>
    </div>
  );
}
