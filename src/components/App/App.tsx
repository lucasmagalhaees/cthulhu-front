import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Badge,
  Button,
  FormControl,
  FormGroup,
  ListGroup,
  Table,
} from 'react-bootstrap';
import {
  FaBriefcaseMedical,
  FaChild,
  FaMagic,
  FaRegCalendarAlt,
  FaRunning,
  FaUserPlus,
} from 'react-icons/fa';
import { getAllProducts } from '../../services/ProductService';
import { ISheet, ISkill, Sheet } from '../../usecase/sheet';
import Navbar from '../Navbar';
import Container from './../../shared/Container/Container';
import './App.css';

function App() {
  const [sheet, setSheet] = useState<ISheet>();
  const [file, setFile] = useState<any>();
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [skillFirst, setSkillFirst] = useState<ISkill[]>([]);
  const [skillSecond, setSkillSecond] = useState<ISkill[]>([]);
  const [charFirst, setCharFirst] = useState<ISkill[]>([]);
  const [charSecond, setCharSecond] = useState<ISkill[]>([]);
  const [characteristics, setCharacteristics] = useState<ISkill[]>([]);
  const [nativeLanguage, setNativeLanguage] = useState<ISkill>();
  const [foreignLanguage, setForeignLanguage] = useState<ISkill>();

  async function fetchData() {
    const _sheet = await getAllProducts();
    setSheet(_sheet);
    setSkills(_sheet.skills);
    setCharacteristics(_sheet.characteristics);
    handleData(
      setForeignLanguage,
      skills,
      setNativeLanguage,
      characteristics,
      setCharFirst,
      setCharSecond,
      setSkillFirst,
      setSkillSecond
    );
  }

  const importFile = async (importedSheet: any) => {
    try {
      const _sheet: ISheet = JSON.parse(importedSheet);
      setSheet(_sheet);
      setSkills(_sheet.skills);
      setCharacteristics(_sheet.characteristics);
      handleData(
        setForeignLanguage,
        skills,
        setNativeLanguage,
        characteristics,
        setCharFirst,
        setCharSecond,
        setSkillFirst,
        setSkillSecond
      );
    } catch (e) {
      console.log('An error on casting object has occurred', e);
    }
  };

  const downloadFile = async () => {
    console.log(sheet);
    const myData = new Sheet(
      sheet?.hitPoints || 0,
      sheet?.age || 0,
      sheet?.movementRate || 0,
      sheet?.build || 0,
      sheet?.bonusDamage || 0,
      sheet?.magicPoints || 0,
      sheet?.nativeLanguage || '',
      sheet?.foreignLanguage || '',
      skills,
      characteristics
    );

    const fileName = `Char_${sheet?.nativeLanguage}_${sheet?.foreignLanguage}`;
    const json = JSON.stringify(myData);

    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + '.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='App'>
      <Navbar title='Call of Cthulhu Char' subtitle='Insanity Awaits'></Navbar>

      <Container>
        <button className='mb-4 mt-2 button-background' onClick={fetchData}>
          Generate Sheet
        </button>
        <Button
          variant='outline-success'
          className='mb-4 mt-2 '
          onClick={downloadFile}
        >
          Download Sheet
        </Button>
      </Container>

      <div className='box'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Import Sheet</Accordion.Header>
            <Accordion.Body>
              <FormGroup className='m-0'>
                <FormControl
                  className='textFeedback'
                  as='textarea'
                  placeholder='feedback'
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                  type='text'
                />
                <Button
                  className='btnFormSend'
                  variant='outline-success'
                  onClick={() => importFile(file)}
                >
                  Send Feedback
                </Button>
              </FormGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <Container>
        <ListGroup className='list-group' as='ol'>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Age</div>
              <FaRegCalendarAlt style={{ color: 'black' }} />
            </div>
            <Badge bg='warning' pill>
              {sheet?.age}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Hit Points</div>
              <FaBriefcaseMedical style={{ color: 'black' }} />
            </div>
            <Badge bg='success' pill>
              {sheet?.hitPoints}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Build</div>
              <FaChild style={{ color: 'black' }} />
            </div>
            <Badge bg='success' pill>
              {sheet?.build}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Move Rate</div>
              <FaRunning style={{ color: 'black' }} />
            </div>
            <Badge bg='success' pill>
              {sheet?.movementRate}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Bonus Damage</div>
              <FaUserPlus style={{ color: 'black' }} />
            </div>
            <Badge bg='danger' pill>
              {sheet?.bonusDamage}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Magic Points</div>
              <FaMagic style={{ color: 'black' }} />
            </div>
            <Badge bg='danger' pill>
              {sheet?.magicPoints}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Native Language</div>
              {sheet?.nativeLanguage}
            </div>
            <Badge bg='primary' pill>
              {nativeLanguage?.mainValue}
            </Badge>
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Foreign Language</div>
              {sheet?.foreignLanguage}
            </div>
            <Badge bg='primary' pill>
              {foreignLanguage?.mainValue}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
      </Container>

      <div className='box'>
        <div className='row'>
          <div className='column'>
            <Table className='table-box' responsive striped bordered hover>
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
            <Table className='table-box' responsive striped bordered hover>
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
            <Table className='table-box' responsive striped bordered hover>
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
            <Table className='table-box' responsive striped bordered hover>
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
function handleData(
  setForeignLanguage: React.Dispatch<React.SetStateAction<ISkill | undefined>>,
  skills: ISkill[],
  setNativeLanguage: React.Dispatch<React.SetStateAction<ISkill | undefined>>,
  characteristics: ISkill[],
  setCharFirst: React.Dispatch<React.SetStateAction<ISkill[]>>,
  setCharSecond: React.Dispatch<React.SetStateAction<ISkill[]>>,
  setSkillFirst: React.Dispatch<React.SetStateAction<ISkill[]>>,
  setSkillSecond: React.Dispatch<React.SetStateAction<ISkill[]>>
) {
  setForeignLanguage(
    skills.find((skill) => skill.attributeName.includes('Foreign'))
  );
  setNativeLanguage(
    skills.find((skill) => skill.attributeName.includes('Native'))
  );

  const middleChar = Math.ceil(characteristics.length / 2);
  setCharFirst(characteristics.splice(0, middleChar));
  setCharSecond(characteristics.splice(-middleChar));
  const middleSkill = Math.ceil(skills.length / 2);
  setSkillFirst(skills.splice(0, middleSkill));
  setSkillSecond(skills.splice(-middleSkill));
}
