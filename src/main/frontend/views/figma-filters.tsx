import {GridSortColumn} from '@vaadin/react-components';
import {Grid} from '@vaadin/react-components';
import {RadioButton} from '@vaadin/react-components';
import {RadioGroup} from '@vaadin/react-components';
import {Checkbox} from '@vaadin/react-components';
import {CheckboxGroup} from '@vaadin/react-components';
import {TextField} from '@vaadin/react-components';
import {ComboBox} from '@vaadin/react-components';
import {Icon} from '@vaadin/react-components';
import {Button} from '@vaadin/react-components';
import {VerticalLayout} from '@vaadin/react-components';
import {HorizontalLayout} from '@vaadin/react-components';
import type {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import {NavLink} from "react-router";


export const config: ViewConfig = {
    title: 'Figma Filters',
    menu: {
        icon: 'vaadin:filter',
        title: 'Figma Filters',
    },
    loginRequired: true,
};

export default function FigmaFilters() {
    return (
        <div className="flex flex-col"><HorizontalLayout style={{minWidth: '980px', height: '100vh'}}><VerticalLayout
            className="h-full p-m border bg-contrast-5" style={{
            ...{'--lumo-utility-border-color': 'var(--lumo-contrast-10pct)'},
            maxWidth: '40%',
            flexGrow: '1'
        }}><HorizontalLayout theme="spacing" className="self-stretch gap-s items-center"><h4
            className="flex-grow">Filters</h4>
            <NavLink to='https://www.figma.com/design/vFW7IaECFMPUzn7pPAjMKM/Vaadin-Copilot---Figma-to-Copilot-test?node-id=909-15056&t=bW9onDVUR8W9YXBm-0'>Source Design</NavLink>
            <Button theme="tertiary icon"><Icon icon="lumo:cross"
                                                                                  style={{"padding": "var(--lumo-space-xs)"}}
                                                                                  slot="prefix"/></Button></HorizontalLayout><VerticalLayout
            className="self-stretch"><ComboBox label="Brand" className="self-stretch"/><HorizontalLayout theme="spacing"
                                                                                                         className="self-stretch gap-xs items-end"><TextField
            label="Price" className="flex-grow">
            <div slot="suffix"><span>€</span></div>
        </TextField><TextField label="Category" className="flex-grow">
            <div slot="suffix"><span>€</span></div>
        </TextField></HorizontalLayout><CheckboxGroup label="Category" className="self-stretch"><Checkbox
            label="Graphics Card"/><Checkbox label="Storage" checked/><Checkbox label="Power supply" checked/><Checkbox
            label="CPU Cooler"/><Checkbox label="Motherboard"/><Checkbox label="Monitor"/></CheckboxGroup><RadioGroup
            theme="vertical" label="Availability" className="self-stretch"><RadioButton label="Stock and preorder"
                                                                                        checked/><RadioButton
            label="Only items in stock"/></RadioGroup><HorizontalLayout theme="spacing"
                                                                        className="self-stretch gap-xs items-end"><TextField
            label="Rating" className="flex-grow"/><TextField label="Category" className="flex-grow"/></HorizontalLayout></VerticalLayout></VerticalLayout><VerticalLayout
            className="h-full flex-grow"><HorizontalLayout theme="spacing"
                                                           className="self-stretch gap-s p-m justify-between items-center">
            <h4>Products</h4><HorizontalLayout theme="spacing" className="gap-s justify-end items-center"><TextField
            label="">
            <div slot="prefix"><span>Fix</span></div>
        </TextField><Button>Filters</Button></HorizontalLayout></HorizontalLayout><Grid items={[{
            "name": "UltraX Pro 9000",
            "brand": "TechMaster",
            "stockBalance": "15 items",
            "category": "Graphics Card",
            "price": "$899"
        }, {
            "name": "QuantumDrive X1",
            "brand": "SpeedMax",
            "stockBalance": "3 items",
            "category": "SSD",
            "price": "$299"
        }, {
            "name": "PowerCore Titan 850W",
            "brand": "VoltEdge",
            "stockBalance": "11 items",
            "category": "Power Supply",
            "price": "$149"
        }, {
            "name": "AeroCooler 360",
            "brand": "ChillTech",
            "stockBalance": "27 items",
            "category": "CPU Cooler",
            "price": "$89"
        }, {
            "name": "HyperVibe X2",
            "brand": "SoundWave",
            "stockBalance": "Not in stock",
            "category": "Sound Card",
            "price": "$129"
        }, {
            "name": "InfinityBoard Z9",
            "brand": "CoreLogic",
            "stockBalance": "10 items",
            "category": "Motherboard",
            "price": "$459"
        }, {
            "name": "TurboBoost GTX Fan",
            "brand": "ThermoDrive",
            "stockBalance": "Not in stock",
            "category": "Case Fan",
            "price": "$35"
        }, {
            "name": "OptiView 32K",
            "brand": "VizionTech",
            "stockBalance": "8 items",
            "category": "Monitor",
            "price": "$1,299"
        }, {
            "name": "SurgeMaster Elite 6.0",
            "brand": "SafePower",
            "stockBalance": "2 items",
            "category": "Surge Protector",
            "price": "$49"
        }, {
            "name": "ProSound 5.1 Pro",
            "brand": "AudioMax",
            "stockBalance": "Not in stock",
            "category": "Speaker System",
            "price": "$249"
        }, {
            "name": "UltraX Pro 9000",
            "brand": "TechMaster",
            "stockBalance": "15 items",
            "category": "Graphics Card",
            "price": "$899"
        }, {
            "name": "QuantumDrive X1",
            "brand": "SpeedMax",
            "stockBalance": "36 items",
            "category": "SSD",
            "price": "$299"
        }, {
            "name": "PowerCore Titan 850W",
            "brand": "VoltEdge",
            "stockBalance": "11 items",
            "category": "Power Supply",
            "price": "$149"
        }, {
            "name": "AeroCooler 360",
            "brand": "ChillTech",
            "stockBalance": "27 items",
            "category": "CPU Cooler",
            "price": "$89"
        }, {
            "name": "HyperVibe X2",
            "brand": "SoundWave",
            "stockBalance": "10 items",
            "category": "Sound Card",
            "price": "$129"
        }, {
            "name": "InfinityBoard Z9",
            "brand": "CoreLogic",
            "stockBalance": "8 items",
            "category": "Motherboard",
            "price": "$459"
        }, {
            "name": "TurboBoost GTX Fan",
            "brand": "ThermoDrive",
            "stockBalance": "2 items",
            "category": "Case Fan",
            "price": "$35"
        }, {
            "name": "OptiView 32K",
            "brand": "VizionTech",
            "stockBalance": "15 items",
            "category": "Monitor",
            "price": "$1,299"
        }, {
            "name": "SurgeMaster Elite 6.0",
            "brand": "SafePower",
            "stockBalance": "36 items",
            "category": "Surge Protector",
            "price": "$49"
        }, {
            "name": "ProSound 5.1 Pro",
            "brand": "AudioMax",
            "stockBalance": "11 items",
            "category": "Speaker System",
            "price": "$249"
        }]} className="self-stretch h-full" style={{maxHeight: '100vh', minHeight: '50vh'}}><GridSortColumn
            header="Name" path="name"/><GridSortColumn header="Brand" path="brand"/><GridSortColumn
            header="Stock balance" path="stockBalance"/><GridSortColumn header="Category"
                                                                        path="category"/><GridSortColumn header="Price"
                                                                                                         path="price"/></Grid></VerticalLayout></HorizontalLayout>

        </div>
    );
}
