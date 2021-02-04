import React, { useState } from 'react';
import axios from 'axios';

import { Content, Title, SubTitle, Bold } from './styles';
import { format, formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale'



function Signo(props) {
    const [signo, setSigno] = useState([])

    if (props.signo.value !== undefined)
        axios.get(`http://babi.hefesto.io/signo/${props.signo.value}/dia`)
            .then(
                response => setSigno(response.data),
            ).catch(err => {
                console.error(err)
            });


    return (
        <Content>
            {props.signo.value === signo.signo && 
                <>
                    <Title style={{ width: '70%' }}>{props.signo.name}</Title>
                    {
                        <>
                            <SubTitle>Confira a previsão de <Bold>{format(new Date(), "PPPP", { locale: ptBR })}</Bold></SubTitle>
                            <p>{signo.texto}</p>
                        </>
                    }
                </>
            }
        </Content>
    );
}

export default Signo;