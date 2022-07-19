import React, { useState, useEffect, Component, useMemo, useCallback } from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Input, Space, Button, Card, Collapse, Carousel, List, Slider, Radio, Cascader } from 'antd';
import VirtualList from 'rc-virtual-list';
import { Link } from 'react-router-dom';

import {
  useGetHeliumHotspotsQuery,
} from '../../services/heliumApi';



const { Paragraph } = Typography;
const { Title } = Typography;
const { Panel } = Collapse;

// account data model
const Homepage = () => {
 

  return (
    <>
    <Col>
    <div style={{height: "20vh"}} />
     <Row justify="space-around">
        <Col span={8}>
        <Card style={{height: "60vh"}}>
          hello
        </Card>
        </Col>
     </Row>
    <div style={{height: "20vh"}} />
    </Col>
    </>
  )
}

export default Homepage