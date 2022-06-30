import React, {  useState } from 'react'
import './StatusFormatter.scss';
import { Switch } from 'antd';
import 'antd/dist/antd.min.css'

const StatusFormatter = ({active}) => {

    const [checkedState, setCheckedState] = useState(active)

    return (
        <div className='wrapper '>

            <Switch className={checkedState ? 'Active' : 'Inactive'}
                defaultChecked={active}
                onChange= { (status) => {setCheckedState(status)} } />
        </div>
    )
}

export default StatusFormatter;

