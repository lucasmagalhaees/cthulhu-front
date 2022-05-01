import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Card, ListGroup, Table } from 'react-bootstrap';
import { getAllProducts } from '../../services/ProductService';
import { Sheet, Skill } from '../../usecase/sheet';
import Navbar from '../Navbar';
import './App.css';
import Container from './../../shared/Container/Container';

function App() {
  const [sheet, setSheet] = useState<Sheet>();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillFirst, setSkillFirst] = useState<Skill[]>([]);
  const [skillSecond, setSkillSecond] = useState<Skill[]>([]);
  const [charFirst, setCharFirst] = useState<Skill[]>([]);
  const [charSecond, setCharSecond] = useState<Skill[]>([]);
  const [characteristics, setCharacteristics] = useState<Skill[]>([]);

  async function fetchData() {
    const _sheet = await getAllProducts();
    setSheet(_sheet);
    setSkills(_sheet.skills);
    setCharacteristics(_sheet.characteristics);
    const middleChar = Math.ceil(characteristics.length / 2);
    setCharFirst(characteristics.splice(0, middleChar));
    setCharSecond(characteristics.splice(-middleChar));
    const middleSkill = Math.ceil(skills.length / 2);
    setSkillFirst(skills.splice(0, middleSkill));
    setSkillSecond(skills.splice(-middleSkill));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Navbar title='Call of Cthulhu Char' subtitle='Insanity Awaits'></Navbar>

      <Container>
        <button className='mb-4 mt-2 button-background' onClick={fetchData}>
          Generate Sheet
        </button>

        <Card className='mb-4' style={{ width: '18rem' }}>
          <ListGroup variant='flush'>
            <ListGroup.Item>Hit Points: {sheet?.hitPoints}</ListGroup.Item>
            <ListGroup.Item>Age: {sheet?.age}</ListGroup.Item>
            <ListGroup.Item>
              Movement Rate: {sheet?.movementRate}
            </ListGroup.Item>
            <ListGroup.Item>Build: {sheet?.build}</ListGroup.Item>
            <ListGroup.Item>Build: {sheet?.magicPoints}</ListGroup.Item>
            <ListGroup.Item>
              Native Language: {sheet?.nativeLanguage}
            </ListGroup.Item>
            <ListGroup.Item>
              Foreign Language: {sheet?.foreignLanguage}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Container>
      <div className='box'>
        <div className='row'>
          <div className='column'>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>Attribute</th>
                  <th className='text-center'>Main </th>
                  <th className='text-center'>Half </th>
                  <th className='text-center'>Fifth</th>
                </tr>
              </thead>
              <tbody>
                {charFirst &&
                  charFirst.map((item) => (
                    <tr key={item.attributeName}>
                      <td className='text-center'>{item.attributeName}</td>
                      <td className='text-center'>{item.mainValue}</td>
                      <td className='text-center'>{item.halfValue}</td>
                      <td className='text-center'>{item.fifthValue}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className='column'>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>Attribute</th>
                  <th className='text-center'>Main </th>
                  <th className='text-center'>Half </th>
                  <th className='text-center'>Fifth</th>
                </tr>
              </thead>
              <tbody>
                {charSecond &&
                  charSecond.map((item) => (
                    <tr key={item.attributeName}>
                      <td className='text-center'>{item.attributeName}</td>
                      <td className='text-center'>{item.mainValue}</td>
                      <td className='text-center'>{item.halfValue}</td>
                      <td className='text-center'>{item.fifthValue}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
        <div className='row'>
          <div className='column'>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>Skill</th>
                  <th className='text-center'>Main</th>
                  <th className='text-center'>Half </th>
                  <th className='text-center'>Fifth </th>
                </tr>
              </thead>
              <tbody>
                {skillFirst &&
                  skillFirst.map((item) => (
                    <tr key={item.attributeName}>
                      <td className='text-center'>{item.attributeName}</td>
                      <td className='text-center'>{item.mainValue}</td>
                      <td className='text-center'>{item.halfValue}</td>
                      <td className='text-center'>{item.fifthValue}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div className='column'>
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th className='text-center'>Skill</th>
                  <th className='text-center'>Main</th>
                  <th className='text-center'>Half </th>
                  <th className='text-center'>Fifth </th>
                </tr>
              </thead>
              <tbody>
                {skillSecond &&
                  skillSecond.map((item) => (
                    <tr key={item.attributeName}>
                      <td className='text-center'>{item.attributeName}</td>
                      <td className='text-center'>{item.mainValue}</td>
                      <td className='text-center'>{item.halfValue}</td>
                      <td className='text-center'>{item.fifthValue}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
