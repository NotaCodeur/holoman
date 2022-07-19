import React, { useState, useEffect, Component, useMemo, useCallback } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Input, Space, Button, Card, Collapse, Carousel, List, Slider, Radio, Cascader } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import {
  useGetHeliumHotspotsQuery,
} from '../services/heliumApi';



const { Paragraph } = Typography;
const { Title } = Typography;
const { Panel } = Collapse;

// account data model
const Homepage = () => {
 

  return (
    <>
     
    </>
  )
}

export default Homepage