import React from 'react';
import {Checkbox} from '@vaadin/react-components/Checkbox';
import {DatePicker} from '@vaadin/react-components/DatePicker';
import {NumberField} from '@vaadin/react-components/NumberField';
import {RadioButton} from '@vaadin/react-components/RadioButton';
import {RadioGroup} from '@vaadin/react-components/RadioGroup';
import {TextField} from '@vaadin/react-components/TextField';
import {Icon} from '@vaadin/react-components/Icon';
import {ViewConfig} from "@vaadin/hilla-file-router/types.js";
import {Card} from "@vaadin/react-components";

export const config: ViewConfig = {
    title: 'Tax Form',
    menu: {
        icon: 'vaadin:money-withdraw',
        title: 'Tax Form',
    },
    loginRequired: true,
};

function TaxForm() {
    return (
        <div>
            <Card>
                <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
                    <h2 style={{textAlign: 'center'}}>California Form 540</h2>
                    <img src="images/california-tax-form.png" alt="" style={{maxWidth: '100%'}} /><p style={{textAlign: 'center'}}>2024 California Resident Income Tax Return</p>
                </div>
            </Card>

            <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
                <h1 style={{textAlign: 'center'}}>2024 California Resident Income Tax Return</h1>
                <Checkbox label="Check here if this is an AMENDED return."/>
                <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                    <span>Fiscal year filers only: Enter month of year end: month</span>
                    <span>year 2025.</span>
                </div>
                <div style={{marginTop: '20px', display: 'flex', gap: '10px'}}>
                    <TextField label="Your first name" style={{width: '20%'}}>
                    </TextField>
                    <TextField label="Initial" style={{width: '10%'}}/>
                    <TextField label="Last name" style={{width: '20%'}}>
                    </TextField>
                    <TextField label="Suffix" style={{width: '10%'}}/>
                    <TextField label="Your SSN or ITIN" style={{width: '20%'}}>
                        <Icon icon="vaadin:lock" slot="prefix"/>
                    </TextField>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="If joint tax return, spouse's/RDP's first name" style={{width: '20%'}}>
                    </TextField>
                    <TextField label="Initial" style={{width: '10%'}}/>
                    <TextField label="Last name" style={{width: '20%'}}>
                    </TextField>
                    <TextField label="Suffix" style={{width: '10%'}}/>
                    <TextField label="Spouse's/RDP's SSN or ITIN" style={{width: '20%'}}>
                        <Icon icon="vaadin:lock" slot="prefix"/>
                    </TextField>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Additional information (see instructions)" style={{width: '50%'}}/>
                    <TextField label="PBA code" style={{width: '20%'}}/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Street address (number and street) or PO box" style={{width: '50%'}}>
                        <Icon icon="vaadin:home" slot="prefix"/>
                    </TextField>
                    <TextField label="Apt. no./ste. no." style={{width: '20%'}}/>
                    <TextField label="PMB/private mailbox" style={{width: '20%'}}/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="City (If you have a foreign address, see instructions)" style={{width: '40%'}}>
                        <Icon icon="vaadin:map-marker" slot="prefix"/>
                    </TextField>
                    <TextField label="State" style={{width: '10%'}}/>
                    <TextField label="ZIP code" style={{width: '20%'}}/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Foreign country name" style={{width: '30%'}}>
                        <Icon icon="vaadin:globe" slot="prefix"/>
                    </TextField>
                    <TextField label="Foreign province/state/county" style={{width: '30%'}}/>
                    <TextField label="Foreign postal code" style={{width: '20%'}}/>
                </div>
                <div style={{
                    marginTop: '20px',
                    borderTop: '1px solid black',
                    paddingTop: '10px',
                    display: 'flex',
                    gap: '10px'
                }}>
                    <DatePicker label="Your DOB (mm/dd/yyyy)" style={{width: '30%'}}>
                        <Icon icon="vaadin:calendar" slot="prefix"/>
                    </DatePicker>
                    <DatePicker label="Spouse's/RDP's DOB (mm/dd/yyyy)" style={{width: '30%'}}>
                        <Icon icon="vaadin:calendar" slot="prefix"/>
                    </DatePicker>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Your prior name (see instructions)" style={{width: '30%'}}/>
                    <TextField label="Spouse's/RDP's prior name (see instructions)" style={{width: '30%'}}/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Enter your county at time of filing (see instructions)" style={{width: '50%'}}/>
                </div>
                <div style={{marginTop: '10px'}}>
                    <Checkbox
                        label="If your address above is the same as your principal/physical residence address at the time of filing, check this box"/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="Street address (number and street) (If foreign address, see instructions.)"
                               style={{width: '50%'}}/>
                    <TextField label="Apt. no./ste. no." style={{width: '20%'}}/>
                </div>
                <div style={{marginTop: '10px', display: 'flex', gap: '10px'}}>
                    <TextField label="City" style={{width: '40%'}}/>
                    <TextField label="State" style={{width: '10%'}}/>
                    <TextField label="ZIP code" style={{width: '20%'}}/>
                </div>
                <div style={{marginTop: '20px', borderTop: '1px solid black', paddingTop: '10px'}}>
                    <RadioGroup
                        label="If your California filing status is different from your federal filing status, check the box here">
                        <RadioButton value="1" label="Single"/>
                        <RadioButton value="2"
                                     label="Married/RDP filing jointly (even if only one spouse/RDP had income). See instructions."/>
                        <RadioButton value="3"
                                     label="Married/RDP filing separately. Enter spouse's/RDP's SSN or ITIN above and full name here."/>
                        <RadioButton value="4" label="Head of household (with qualifying person). See instructions."/>
                        <RadioButton value="5" label="Qualifying surviving spouse/RDP. Enter year spouse/RDP died."/>
                    </RadioGroup>
                </div>
                <div style={{marginTop: '10px'}}>
                    <Checkbox
                        label="If someone can claim you (or your spouse/RDP) as a dependent, check the box here. See instr."/>
                </div>
                <div style={{marginTop: '20px', borderTop: '1px solid black', paddingTop: '10px'}}>
                    <h3>Exemptions</h3>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <Checkbox
                            label="Personal: If you checked box 1, 3, or 4 above, enter 1 in the box. If you checked box 2 or 5, enter 2 in the box. If you checked the box on line 6, see instructions."/>
                        <NumberField style={{width: '50px', marginLeft: '10px'}}/>
                        <span style={{marginLeft: '10px'}}>X $149 = $</span>
                        <NumberField style={{width: '100px', marginLeft: '10px'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Checkbox
                            label="Blind: If you (or your spouse/RDP) are visually impaired, enter 1; if both are visually impaired, enter 2. See instructions."/>
                        <NumberField style={{width: '50px', marginLeft: '10px'}}/>
                        <span style={{marginLeft: '10px'}}>X $149 = $</span>
                        <NumberField style={{width: '100px', marginLeft: '10px'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                        <Checkbox
                            label="Senior: If you (or your spouse/RDP) are 65 or older, enter 1; if both are 65 or older, enter 2. See instructions."/>
                        <NumberField style={{width: '50px', marginLeft: '10px'}}/>
                        <span style={{marginLeft: '10px'}}>X $149 = $</span>
                        <NumberField style={{width: '100px', marginLeft: '10px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaxForm;
