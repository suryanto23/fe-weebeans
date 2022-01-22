import React , {useState} from 'react';
import {Accordion} from 'react-bootstrap'
import AdditionalInfo from './AdditionalInfo';

function AccordionComponent(props) {

    const [detail, setDetail] = useState(false);

    return (
            <Accordion flush className='bg-danger my-3' variant='dark' onClick={() => setDetail(!detail)}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{detail ? 'Hide Detail' : 'Show Detail'}</Accordion.Header>
                    <Accordion.Body className='p-0'>                                  
                        <AdditionalInfo
                            origin={props.origin}
                            roast={props.roast}
                            altitude={props.altitude}
                            process={props.process}
                            variant={props.variant}
                            weight={props.weight}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
    );
}

export default AccordionComponent;
