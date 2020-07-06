import React from 'react'
import {useState} from 'react'
import {Button, ButtonGroup, Col, Row} from "react-bootstrap";


export const Quote = (props) => {
    let json = JSON.parse(localStorage.getItem('joke'));
    const getQuote = async (isBeginning) => {
        let value = props.location.search
        let link = value.split('=');
        isBeginning ? link=`http://api.icndb.com/jokes/${link[1]}/` : link = `http://api.icndb.com/jokes/random/`
        let response = await fetch (link)
        if (response.ok) {
            let json = await response.json();

            localStorage.setItem('joke', JSON.stringify(json.value))
            setQuote(json.value);
        } else {
            console.log("Ошибка HTTP: " + response.status);
        }
    }

    const copyText = () =>
    {
        let link = `localhost:8080/?id=${quote.id}`
        navigator.clipboard.writeText(link)
            .then(() => {
                console.log('получилось')
            })
            .catch(err => {
                console.log('Что то пошло не так:', err);
            })
    }
console.log(json)
    const [quote, setQuote] = useState(localStorage.getItem('joke') ? json : ()=> getQuote(true) );

    return (

        <Row>
            <Col>
            <h1>{quote.joke}</h1>
                <ButtonGroup vertical className={"buttonAling"}>
                    <Button
                        onClick={()=>getQuote()}
                        className = {'usersButton'} >
                        Случайная цитата
                    </Button>
                    <Button
                        onClick={()=>copyText()}
                        className = {'usersButton btn-info'}>
                        Скопировать ссылку
                    </Button>
                </ButtonGroup>
            </Col>
            <div className={'footer'}>
                <a href="">Репозиторий</a>
            </div>
        </Row>
    )
}