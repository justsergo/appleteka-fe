import React, {useCallback, useEffect, useState} from 'react';
import './styles.css';

import {useTelegram} from "../../hooks/useTelegram"; 
import TextField from '../TextField';


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
            <h3>Введите ваши данные</h3>
             {/*выпайдка*/}
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>iphone</option>
                <option value={'legal'}>airpods</option>
                <option value={'legal'}>macbook</option>
                <option value={'legal'}>apple-watch</option>
            </select>  
            <TextField
                className={'input'} 
                placeholder={'Серийный номер'}
                value={country}
                onChange={onChangeCountry}
            />
            {/*автокомлит + выпайдка*/}
            <input
                className={'input'}
                type="text"
                placeholder={'Модель устройства'}
                value={country}
                onChange={onChangeCountry}
            />
            
            <input
                className={'input'}
                type="text"
                placeholder={'Комплект девайса'}
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type="range"
                placeholder={'Состояние'}
                // value={country}
                onChange={onChangeCountry}
                min="0" 
                max="10" 
                step="10" 
                value="80" 
            />
            <select value={subject} onChange={onChangeSubject} className={'select'}>
                <option value={'physical'}>64</option>
                <option value={'legal'}>128</option>
                <option value={'legal'}>256</option>
                <option value={'legal'}>512</option>
            </select>            
            <input
                className={'input'}
                type="range"
                placeholder={'Износ батареи'}
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
                placeholder={'Описание'}
                value={street}
                onChange={onChangeStreet}
            />
        </div>
    );
};

export default Form;