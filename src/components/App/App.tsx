import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  Accordion,
  Badge,
  Button,
  Card,
  Form,
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
import {
  getRegions,
  getSheet,
  getSheetWithParams,
  getStereotypes,
} from '../../services/CharacterService';
import { CharParams } from '../../usecase/charParams';
import { Sheet } from '../../usecase/sheet';
import { Skill } from '../../usecase/skill';
import { Stereotype } from '../../usecase/stereotype';
import Navbar from '../Navbar';
import Container from './../../shared/Container/Container';
import './App.css';

function App() {
  const [sheet, setSheet] = useState<Sheet>();
  const [params, setParams] = useState<CharParams>(new CharParams('', '', ''));
  const [nativeRegion, setNativeRegion] = useState<string>('');
  const [foreignRegion, setForeignRegion] = useState<string>('');
  const [stereotype, setStereotype] = useState<string>('');
  const [regions, setRegions] = useState<Stereotype[]>();
  const [stereotypes, setStereotypes] = useState<Stereotype[]>();
  const [file, setFile] = useState<any>();
  const [skillFirst, setSkillFirst] = useState<Skill[]>([]);
  const [skillSecond, setSkillSecond] = useState<Skill[]>([]);
  const [charFirst, setCharFirst] = useState<Skill[]>([]);
  const [charSecond, setCharSecond] = useState<Skill[]>([]);

  async function fetchDataWithParams() {
    console.log(`native ${nativeRegion}`);
    console.log(`foreign ${foreignRegion}`);
    console.log(`steo ${stereotype}`);

    const _sheet = await getSheetWithParams(
      nativeRegion,
      foreignRegion,
      stereotype
    );
    setSheet(
      new Sheet(
        _sheet?.hitPoints || 0,
        _sheet?.age || 0,
        _sheet?.movementRate || 0,
        _sheet?.build || 0,
        _sheet?.bonusDamage || 0,
        _sheet?.magicPoints || 0,
        _sheet?.nativeLanguage || '',
        _sheet?.foreignLanguage || '',
        _sheet.charFirst,
        _sheet.charSecond,
        _sheet.skillFirst,
        _sheet.skillSecond
      )
    );

    setSkillFirst(_sheet.skillFirst);
    setSkillSecond(_sheet.skillSecond);
    setCharFirst(_sheet.charFirst);
    setCharSecond(_sheet.charSecond);
  }

  async function fetchData() {
    const _sheet = await getSheet();
    setSheet(
      new Sheet(
        _sheet?.hitPoints || 0,
        _sheet?.age || 0,
        _sheet?.movementRate || 0,
        _sheet?.build || 0,
        _sheet?.bonusDamage || 0,
        _sheet?.magicPoints || 0,
        _sheet?.nativeLanguage || '',
        _sheet?.foreignLanguage || '',
        _sheet.charFirst,
        _sheet.charSecond,
        _sheet.skillFirst,
        _sheet.skillSecond
      )
    );

    const _regions = await getRegions();
    setRegions(_regions);

    const _stereotypes = await getStereotypes();
    setStereotypes(_stereotypes);

    setSkillFirst(_sheet.skillFirst);
    setSkillSecond(_sheet.skillSecond);
    setCharFirst(_sheet.charFirst);
    setCharSecond(_sheet.charSecond);
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fillData(_sheet: Sheet) {
    setSheet(
      new Sheet(
        _sheet?.hitPoints || 0,
        _sheet?.age || 0,
        _sheet?.movementRate || 0,
        _sheet?.build || 0,
        _sheet?.bonusDamage || 0,
        _sheet?.magicPoints || 0,
        _sheet?.nativeLanguage || '',
        _sheet?.foreignLanguage || '',
        _sheet.charFirst,
        _sheet.charSecond,
        _sheet.skillFirst,
        _sheet.skillSecond
      )
    );

    setSkillFirst(_sheet.skillFirst);
    setSkillSecond(_sheet.skillSecond);
    setCharFirst(_sheet.charFirst);
    setCharSecond(_sheet.charSecond);
  }

  const handleStereotype = (selected: any) => {
    setStereotype(selected);
  };
  const handleNativeRegion = (selected: any) => {
    setNativeRegion(selected);
  };
  const handleForeignRegion = (selected: any) => {
    setForeignRegion(selected);
  };

  const importFile = async (importedSheet: any) => {
    await clearData(
      setSheet,
      setCharFirst,
      setCharSecond,
      setSkillFirst,
      setSkillSecond
    );
    try {
      const _sheet: Sheet = JSON.parse(importedSheet);
      console.log(_sheet);

      await fillData(_sheet);
    } catch (e) {
      console.log('An error on casting object has occurred', e);
    }
  };

  const downloadFile = async () => {
    const myData = new Sheet(
      sheet?.hitPoints || 0,
      sheet?.age || 0,
      sheet?.movementRate || 0,
      sheet?.build || 0,
      sheet?.bonusDamage || 0,
      sheet?.magicPoints || 0,
      sheet?.nativeLanguage || '',
      sheet?.foreignLanguage || '',
      charFirst,
      charSecond,
      skillFirst,
      skillSecond
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
          className=' mt-2 '
          onClick={downloadFile}
        >
          Download Sheet
        </Button>
      </Container>

      <div className='box'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Customize Sheet</Accordion.Header>
            <Accordion.Body>
              <div className='radio-row'>
                <div className='radio-column'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='text-center'>
                        Stereotypes
                      </Card.Title>
                      <Card.Text>
                        <Form>
                          {stereotypes?.map((value) => (
                            <div key={value.name} className='mb-3'>
                              <Form.Check
                                type='radio'
                                onChange={(e) => handleStereotype(e.target.id)}
                                id={value.name}
                                value={stereotype}
                                name='stereotype'
                                label={value.alias}
                              />
                            </div>
                          ))}
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className='radio-column'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='text-center'>
                        Native Region
                      </Card.Title>
                      <Card.Text>
                        <Form className='form-container'>
                          {regions?.map((value) => (
                            <div key={value.name} className='mb-3'>
                              <Form.Check
                                onChange={(e) =>
                                  handleNativeRegion(e.target.id)
                                }
                                value={nativeRegion}
                                type='radio'
                                id={value.name}
                                name='native'
                                label={value.alias}
                              />
                            </div>
                          ))}
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className='radio-column'>
                  <Card>
                    <Card.Body>
                      <Card.Title className='text-center'>
                        Foreign Region
                      </Card.Title>
                      <Card.Text>
                        <Form className='form-container'>
                          {regions?.map((value) => (
                            <div key={value.name} className='mb-3'>
                              <Form.Check
                                type='radio'
                                onChange={(e) =>
                                  handleForeignRegion(e.target.id)
                                }
                                value={foreignRegion}
                                id={value.name}
                                name='foreign'
                                label={value.alias}
                              />
                            </div>
                          ))}
                        </Form>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className='button-container mt-3'>
                  <Button
                    variant='outline-success'
                    onClick={() => fetchDataWithParams()}
                  >
                    Generate Sheet
                  </Button>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className='box'>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>Upload Sheet</Accordion.Header>
            <Accordion.Body>
              <FormGroup className='m-0'>
                <FormControl
                  className='textFeedback'
                  as='textarea'
                  rows={20}
                  placeholder='Place Json
                  '
                  value={file}
                  onChange={(e) => setFile(e.target.value)}
                  type='text'
                />
                <div className='button-container mt-3'>
                  <Button
                    variant='outline-primary'
                    onClick={() => importFile(file)}
                  >
                    Confirm Sheet Upload
                  </Button>
                  <Button variant='outline-danger' onClick={() => setFile('')}>
                    Cancel
                  </Button>
                </div>
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
            <Badge bg='primary' pill>
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
          </ListGroup.Item>
          <ListGroup.Item
            as='li'
            className='d-flex justify-content-between align-items-start'
          >
            <div className='ms-2 me-auto'>
              <div className='fw-bold'>Foreign Language</div>
              {sheet?.foreignLanguage}
            </div>
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
                {charFirst.map((item) => (
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
                {charSecond.map((item) => (
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
                {skillFirst.map((item) => (
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
                {skillSecond.map((item) => (
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
async function clearData(
  setSheet: React.Dispatch<React.SetStateAction<Sheet | undefined>>,
  setCharFirst: React.Dispatch<React.SetStateAction<Skill[]>>,
  setCharSecond: React.Dispatch<React.SetStateAction<Skill[]>>,
  setSkillFirst: React.Dispatch<React.SetStateAction<Skill[]>>,
  setSkillSecond: React.Dispatch<React.SetStateAction<Skill[]>>
) {
  setSheet(new Sheet(0, 0, 0, 0, 0, 0, '', '', [], [], [], []));
  setCharFirst([]);
  setCharSecond([]);
  setSkillFirst([]);
  setSkillSecond([]);
}
