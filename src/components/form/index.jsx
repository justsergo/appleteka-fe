import {useState,useCallback,useEffect} from 'react';
import './styles.css';
import TextField from '../TextField';
import Select from 'components/Select';
import { useTelegram } from 'hooks/useTelegram';
import { AIRPODS, IPHONE, MACBOOK } from 'constants/deviceTypes';


const Form = () => {
    const [dataFileds, setDataFields] = useState({
        deviceType: '',
        serialNumber: '',
        diveceModel: '',
        deviceKit: '',
        deviceCondition: 5,
        ramSize: 128,
        batteryCondition: 90,
        additionalInfo: '',
    });
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        let data = {}
        switch (dataFileds.deviceType) {
            case IPHONE:
                data = dataFileds;
                break
            case AIRPODS:
                data = {
                    deviceType: dataFileds.deviceType,
                    serialNumber: dataFileds.serialNumber,
                    diveceModel: dataFileds.diveceModel,
                    deviceKit: dataFileds.deviceKit,
                    deviceCondition: dataFileds.deviceCondition,
                    additionalInfo: dataFileds.additionalInfo,
                };
                break  
            case MACBOOK:
                data = {
                    deviceType: dataFileds.deviceType,
                    serialNumber: dataFileds.serialNumber,
                    diveceModel: dataFileds.diveceModel,
                    deviceKit: dataFileds.deviceKit,
                    deviceCondition: dataFileds.deviceCondition,
                    ramSize: dataFileds.ramSize,
                    batteryCondition: dataFileds.batteryCondition,
                    additionalInfo: dataFileds.additionalInfo,
                };
                break 
            default:
                data = null;
                break;
        }
        console.log(data);
        tg.sendData(JSON.stringify(data));
    }, [tg, dataFileds]);

    const reqiredFields = () => {
        let feilds = {}
        switch (dataFileds.deviceType) {
            case IPHONE:
                feilds = dataFileds;
                break
            case AIRPODS:
                feilds = {
                    deviceType: dataFileds.deviceType,
                    serialNumber: dataFileds.serialNumber,
                    diveceModel: dataFileds.diveceModel,
                    deviceKit: dataFileds.deviceKit,
                    deviceCondition: dataFileds.deviceCondition,
                    additionalInfo: dataFileds.additionalInfo,
                };
                break  
            case MACBOOK:
                feilds = {
                    deviceType: dataFileds.deviceType,
                    serialNumber: dataFileds.serialNumber,
                    diveceModel: dataFileds.diveceModel,
                    deviceKit: dataFileds.deviceKit,
                    deviceCondition: dataFileds.deviceCondition,
                    ramSize: dataFileds.ramSize,
                    batteryCondition: dataFileds.batteryCondition,
                    additionalInfo: dataFileds.additionalInfo,
                };
                break 
            default:
                feilds = {};
                break;
        }
        return feilds
    }

    const isEmptyRequiredFields = Object.values(reqiredFields()).includes('')

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData, tg]);

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [tg.MainButton]);

    useEffect(() => {
        if(isEmptyRequiredFields) {
            tg.MainButton.disable();
        } else {
            tg.MainButton.show();
        }
    }, [tg.MainButton, isEmptyRequiredFields]);

    const onChange = (e) => {
        setDataFields({
                ...dataFileds,
                [e.target.id] : e.target.value
            })
    }

    return (
        <div className={"form"}>
            <Select
                value={dataFileds.deviceType} 
                onChange={onChange} 
                required
                label='Выбирите тип устройства'
                id='deviceType'
            >
                <option value={'physical'}>{IPHONE.toLowerCase()}</option>
                <option value={'legal'}>{AIRPODS.toLowerCase()}</option>
                <option value={'legal'}>{MACBOOK.toLowerCase()}</option>
            </Select>  
            <TextField
                placeholder={'Серийный номер'}
                value={dataFileds.serialNumber}
                onChange={onChange}
                label='Введите серийный номер'
                id='serialNumber'
                required
            />
            {/*автокомлит + выпайдка*/}
            <TextField
                type="text"
                label='Модель устройства'
                id='diveceModel'
                placeholder={'Введите модель устройства'}
                value={dataFileds.diveceModel}
                onChange={onChange}
                required
            />
            
            <TextField
                type="text"
                label='Комплект девайса'
                id='deviceKit'
                placeholder={'Опишите комплект девайса'}
                value={dataFileds.deviceKit}
                onChange={onChange}
            />
            <TextField
                type="range"
                label={`Дайте оценку состояния девайса ${dataFileds?.deviceCondition}`}
                id='deviceCondition'
                value={dataFileds.deviceCondition}
                onChange={onChange}
                min="0" 
                max="10" 
                step="1" 
            />
            <Select 
                value={dataFileds.ramSize} 
                onChange={onChange} 
                label='Укажите количство памяти'
                id='ramSize'
            >
                <option value={'64'}>64 гб</option>
                <option value={'128'}>128 гб</option>
                <option value={'256'}>256 гб</option>
                <option value={'512'}>512 гб</option>
            </Select>            
            <TextField
                type="range"
                label={`Укажите износ батареи ${dataFileds?.batteryCondition}`}
                id='batteryCondition'
                value={dataFileds.batteryCondition}
                onChange={onChange}
                min="0" 
                max="100" 
                step="1" 
            />
            <textarea
                className={'input'}
                type="text"
                id='additionalInfo'
                placeholder={'Опишите ваш девайс'}
                value={dataFileds.additionalInfo}
                onChange={onChange}
                rows={7}
            />
        </div>
    );
};

export default Form;