import React from 'react';
import {loadData} from './loadData';

export default function Hello() {
  return <button onClick={() => loadData()}>Load Data</button>
};
