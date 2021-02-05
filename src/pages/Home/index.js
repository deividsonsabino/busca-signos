import React, { useState } from 'react'
import { Card, Container, Image, Title, Select, CardHeader, Subtitle } from './styles.js';

import Signo from '../../components/Signo';
import aquario from "../../assets/images/signos/aquario.png"
import libra from "../../assets/images/signos/libra.png"
import gemeos from "../../assets/images/signos/gemeos.png"
import cancer from "../../assets/images/signos/cancer.png"
import touro from "../../assets/images/signos/touro.png"
import leao from "../../assets/images/signos/leao.png"
import virgem from "../../assets/images/signos/virgem.png"
import peixes from "../../assets/images/signos/peixes.png"
import aries from "../../assets/images/signos/aries.png"
import capricornio from "../../assets/images/signos/capricornio.png"
import sargitario from "../../assets/images/signos/sargitario.png"
import escorpiao from "../../assets/images/signos/escorpiao.png"

export default function Index() {
  const signos = [
    { name: "Aquario", value: "aquario", img: aquario },
    { name: "Peixes", value: "peixes", img: peixes },
    { name: "Aries", value: "aries", img: aries },
    { name: "Touro", value: "touro", img: touro },
    { name: "Gêmeos", value: "gemeos", img: gemeos },
    { name: "Cancer", value: "cancer", img: cancer },
    { name: "Leão", value: "leao", img: leao },
    { name: "Virgem", value: "virgem", img: virgem },
    { name: "Libra", value: "libra", img: libra },
    { name: "Escorpião", value: "escorpiao", img: escorpiao },
    { name: "Sargitário", value: "sargitario", img: sargitario },
    { name: "Capricórnio", value: "capricornio", img: capricornio },
  ]
  const [signo, setSigno] = useState("")

  const changeSigno = (event) => {
    const filterSigno = signos.find(opt => opt.value === event)
    setSigno(filterSigno)
  }

  return (
    <Container>
      <div>
        <Card>
          <CardHeader>
            <Title>Selecione o Signo</Title>
            <Subtitle>Confira o que os astros tem a dizer para o seu signo hoje</Subtitle>

          </CardHeader>
          <Select name="signos" onChange={e => changeSigno(e.currentTarget.value)}>
            <option value="">Selecione seu signo</option>
            {signos.map(signo => (
              <option key={signo.value} value={signo.value}>{signo.name}</option>
            ))}
          </Select>
          <Image src={signo.img} />
        </Card>
      </div>

      <Signo signo={signo} />
    </Container>
  )
}
