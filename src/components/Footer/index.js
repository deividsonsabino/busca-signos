import React from 'react';

import { FooterFixed, Content, Horoscopo, Contact, List, Item } from './styles';

function Footer() {
    return (
        <div>
            <FooterFixed>
                <Content>
                    <Horoscopo>
                        O horóscopo é uma espécie de diagrama que define as posições relativas dos planetas e dos signos zodiacais num determinado dia específico, geralmente definido como o do nascimento de uma pessoa
                    </Horoscopo>
                    <Contact>
                        <h4>Desenvolvedor</h4>
                        <List>
                            <Item>
                                gitbub - deivaotv
                            </Item>
                            <Item>
                                gitbub - deivaotv
                            </Item>
                            <Item>
                                gitbub - deivaotv
                            </Item>
                        </List>
                    </Contact>
                </Content>
            </FooterFixed>
        </div>
    );
}

export default Footer;