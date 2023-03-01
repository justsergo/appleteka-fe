import React, {useCallback, useEffect, useState} from 'react';
import './styles.css';

import {useTelegram} from "../../hooks/useTelegram"; 
import TextField from '../TextField';
import Select from 'components/Select';


const Form = () => {
    const [country, setCountry] = useState('');
    const [street, setStreet] = useState('');
    const [subject, setSubject] = useState('physical');
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            country,
            street,
            subject
        }
        tg.sendData(JSON.stringify(data));
    }, [country, street, subject])

    // useEffect(() => {
    //     tg.onEvent('mainButtonClicked', onSendData)
    //     return () => {index
    //     if(!street || !country) {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //     }}
    // }, [country, street]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <Select
                value={subject} 
                onChange={onChangeSubject} 
                required
                label='Выбирите тип устройства'
                id='deviceType'
            >
                <option value={'physical'}>iphone</option>
                <option value={'legal'}>airpods</option>
                <option value={'legal'}>macbook</option>
                <option value={'legal'}>apple-watch</option>
            </Select>  
            <TextField
                placeholder={'Серийный номер'}
                value={country}
                onChange={onChangeCountry}
                label='Введите серийный номер'
                id='serialNumber'
                required
            />
            {/*автокомлит + выпайдка*/}
            <TextField
                type="text"
                label='Модель устройства'
                id='model'
                placeholder={'Введите модель устройства'}
                value={country}
                onChange={onChangeCountry}
                required
            />
            
            <TextField
                type="text"
                label='Комплект девайса'
                id='kit'
                placeholder={'Опишите комплект девайса'}
                value={country}
                onChange={onChangeCountry}
            />
            <TextField
                type="range"
                label={'Дайте оценку состояния девайса'}
                id='condition'
                // value={country}
                onChange={onChangeCountry}
                min="0" 
                max="10" 
                step="10" 
                value="80" 
            />
            <Select 
                value={subject} 
                onChange={onChangeSubject} 
                label='Укажите количство памяти'
                id='ram'
            >
                <option value={'physical'}>64</option>
                <option value={'legal'}>128</option>
                <option value={'legal'}>256</option>
                <option value={'legal'}>512</option>
            </Select>            
            <TextField
                className={'input'}
                type="range"
                placeholder={'Укажите износ батареи'}
                // value={street}
                onChange={onChangeStreet}
                min="0" 
                max="100" 
                step="1" 
                value="30" 
            />
            <textarea
                className={'input'}
                type="text"
                placeholder={'Опишите ваш девайс'}
                value={street}
                onChange={onChangeStreet}
                rows={7}
            />
        </div>
    );
};

export default Form;