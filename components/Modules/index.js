import React from 'react'
import {FaShippingFast } from 'react-icons/fa'
import {GiWorld, GiReturnArrow} from 'react-icons/gi'
import { ModulesIcons, Module, Moduleh1, ModuleIcon} from './style';


const Modules = () => {
    return (
        <>
            <ModulesIcons>
                <Module>
                    <ModuleIcon>
                        <FaShippingFast/>
                    </ModuleIcon>
                    <Moduleh1>SAME DAY SHIPMENT</Moduleh1>
                </Module>
                <Module>
                    <ModuleIcon>
                        <GiReturnArrow/>
                    </ModuleIcon>
                    <Moduleh1>14 DAYS RIGHT OF RETURN</Moduleh1>
                </Module>
                <Module>
                    <ModuleIcon>
                        <GiWorld/>
                    </ModuleIcon>
                    <Moduleh1>FREE SHIPPING TO ALL EU COUNTRIES</Moduleh1>
                </Module>
            </ModulesIcons>
        </>
    )
}

export default Modules
