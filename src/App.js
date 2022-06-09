import { useRef } from 'react'
import { Button, Card, Col, Container, Row, Stack } from 'react-bootstrap'

const App = () => {
  // const th1 = useRef()
  // const th2 = useRef()
  // const th3 = useRef()
  const inp = useRef()
  const plus = useRef()
  const div = useRef()
  const dot = useRef()
  const times = useRef()
  const minus = useRef()
  const zero = useRef()
  const one = useRef()
  const two = useRef()
  const three = useRef()
  const four = useRef()
  const five = useRef()
  const six = useRef()
  const seven = useRef()
  const eight = useRef()
  const nine = useRef()
  const del = useRef()
  const equal = useRef()

  const themes = (e) => {
    var x = document.querySelector('body')
    x.setAttribute('className', e.target.value)
    console.log(x)
  }
  
  const reset = () => {
    inp.current.value = ''
  }
  
  const equalC = () => {
    if(inp.current.value !== '')
    try {
      inp.current.value =  eval(inp.current.value)
    } catch (er) {
      inp.current.value = er
    }
  }

  const dotC = () => {
    const ed = inp.current.value
    if(ed === '')
      inp.current.value = ed + '0.'
    else
      inp.current.value = ed + '.'
  }

  const plusC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '+'
  }

  const minusC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '-'
  }

  const timesC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '*'
  }

  const divC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '/'
  }

  const zeroC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '0'
  }

  const oneC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '1'
  }

  const twoC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '2'
  }

  const threeC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '3'
  }

  const fourC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '4'
  }

  const fiveC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '5'
  }

  const sixC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '6'
  }

  const sevenC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '7'
  }

  const eightC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '8'
  }

  const nineC = () => {
    const ed = inp.current.value
    inp.current.value = ed + '9'
  }

  const delC = () => {
    const ed = inp.current.value
    inp.current.value = ed.slice(0, -1)
  }

  return (
    <Container fluid style={{position: 'absolute', top: 0, left: 0, bottom: 0}}>
      <div className='mt-5'>
        <h3 style={{textAlign: 'center'}}>Calculator Challenge</h3>
        <Row>
          <Col />
          <Col xs={4}>
            <Card>
              <Card.Header>
                <Row>
                  <Col>
                    <h4>Themes</h4>
                  </Col>
                  <Col >
                    <div className='form-check form-check-inline'>
                      <label className='form-check-label' for='1'>1</label>
                      <input onClick={themes} value='t1' className='form-check-input' id='1' type='radio' name='theme' />
                    </div>
                    <div className='form-check form-check-inline'>
                      <label className='form-check-label' for='2'>2</label>
                      <input onClick={themes} value='t2' className='form-check-input' id='2' type='radio' name='theme' />
                    </div>
                    <div className='form-check form-check-inline'>
                      <label className='form-check-label' for='3'>3</label>
                      <input onClick={themes} value='t3' className='form-check-input' id='3' type='radio' name='theme' />
                    </div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <input className='form-control form-control-lg' style={{textAlign: 'right'}} type='text' ref={inp} readOnly/>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Stack direction='horizontal' gap={4} className='block'>
                        <Button size='lg' variant='secondary' ref={seven} onClick={sevenC} className='col-sm-2 responsive'>7</Button>
                        <Button size='lg' variant='secondary' ref={eight} onClick={eightC} className='col-sm-2'>8</Button>
                        <Button size='lg' variant='secondary' ref={nine} onClick={nineC} className='col-sm-2'>9</Button>
                        <Button size='lg' variant='warning' ref={del} onClick={delC} className='col-sm-2'>Del</Button>
                    </Stack> <br />
                    <Stack direction='horizontal' gap={4}>
                      <Button size='lg' variant='secondary' ref={four} onClick={fourC} className='col-sm-2'>4</Button>
                      <Button size='lg' variant='secondary' ref={five} onClick={fiveC} className='col-sm-2'>5</Button>
                      <Button size='lg' variant='secondary' ref={six} onClick={sixC} className='col-sm-2'>6</Button>
                      <Button size='lg' variant='secondary' ref={plus} onClick={plusC} className='col-sm-2'>+</Button>
                    </Stack> <br />
                    <Stack direction='horizontal' gap={4}>
                      <Button size='lg' variant='secondary' ref={one} onClick={oneC} className='col-sm-2'>1</Button>
                      <Button size='lg' variant='secondary' ref={two} onClick={twoC} className='col-sm-2'>2</Button>
                      <Button size='lg' variant='secondary' ref={three} onClick={threeC} className='col-sm-2'>3</Button>
                      <Button size='lg' variant='secondary' ref={minus} onClick={minusC} className='col-sm-2'>-</Button>
                    </Stack> <br />
                    <Stack direction='horizontal' gap={4}>
                      <Button size='lg' variant='secondary' ref={dot} onClick={dotC} className='col-sm-2'>.</Button>
                      <Button size='lg' variant='secondary' ref={zero} onClick={zeroC} className='col-sm-2'>0</Button>
                      <Button size='lg' variant='secondary' ref={div} onClick={divC} className='col-sm-2'>/</Button>
                      <Button size='lg' variant='secondary' ref={times} onClick={timesC} className='col-sm-2'>*</Button>
                    </Stack> <br />
                    <Stack direction='horizontal' gap={2}>
                      <Button size='lg' variant='danger' onClick={reset} className='col-sm-5'>Reset</Button>
                      <Button size='lg' variant='info' ref={equal} onClick={equalC} className='col-sm-5'>=</Button>
                    </Stack>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
        <div className='text-center'>
          <span className='lead'>Done by Abenezer &copy; 2022</span>
        </div>
      </div>
    </Container>
  );
}

export default App;
