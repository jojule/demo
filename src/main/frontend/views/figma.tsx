import {MessageList} from '@vaadin/react-components';
import {MessageInput} from '@vaadin/react-components';
import {GridSortColumn} from '@vaadin/react-components/GridSortColumn';
import {Grid} from '@vaadin/react-components';
import {RadioButton} from '@vaadin/react-components';
import {RadioGroup} from '@vaadin/react-components';
import {DatePicker} from '@vaadin/react-components';
import {TextArea} from '@vaadin/react-components';
import {TextField} from '@vaadin/react-components';
import {VerticalLayout} from '@vaadin/react-components';
import type {ViewConfig} from '@vaadin/hilla-file-router/types.js';
import {Link, NavLink} from "react-router";


export const config: ViewConfig = {
    title: 'Figma Misc',
    loginRequired: true,
    menu: {
        icon: 'vaadin:pencil',
        title: 'Figma Misc',
    },
};

export default function Figma() {
    return (
        <div className="flex flex-col">
            <h1>This is Figma</h1>

            <VerticalLayout>
                <div className="relative mb-xl gap-m p-m"
                     style={{width: '360px', flexGrow: '1'}}>
                    <h2>Form (<NavLink to="https://www.figma.com/design/lUggyBVGjISVQFcroZ5ido/Vaadin-Design-System--Community-?node-id=1437-21161&t=atem3cUiUaXrTkz9-0">Source</NavLink>)</h2>

                    <TextField label="Title"/><TextArea label="Label"
                                                        style={{"height": "88px"}}/><TextField
                    label="Label">
                    <div slot="suffix"><span>EUR</span></div>
                </TextField>
                    <DatePicker label="Label"/><DatePicker label="Label"/>

                </div>


                <VerticalLayout className="pt-m pr-m pb-m pl-m">
                    <h2>Chat (<NavLink to="https://www.figma.com/design/lUggyBVGjISVQFcroZ5ido/Vaadin-Design-System--Community-?node-id=1933-10838&t=atem3cUiUaXrTkz9-0">Source</NavLink>)</h2>
                    <div><MessageList items={[{
                        "userAbbr": "AV",
                        "time": "12.02.2025 13:40",
                        "userName": "Aurora Velasco",
                        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    }, {
                        "userAbbr": "AT",
                        "time": "12.02.2025 13:41",
                        "userName": "Alicia Thomas",
                        "text": "Nullam sapien justo, aliquam sit amet est non, finibus dapibus odio. Duis fringilla turpis eget viverra tristique. Mauris non ornare enim."
                    }, {
                        "userAbbr": "AR",
                        "time": "12.02.2025 13:43",
                        "userName": "Anthony Robinson",
                        "text": "Nullam ut purus eros."
                    }]} className="self-stretch"/><MessageInput className="self-stretch"/></div>
                </VerticalLayout>


                <VerticalLayout className="pt-xl pr-m pb-m pl-m w-full">
                    <h2>Grid (<NavLink to="https://www.figma.com/design/lUggyBVGjISVQFcroZ5ido/Vaadin-Design-System--Community-?node-id=1310-7251&t=atem3cUiUaXrTkz9-0">Source</NavLink>)</h2>
                    <Grid theme="compact" items={[{
                        "studentId": 801,
                        "firstName": "Olivia",
                        "lastName": "Baker",
                        "major": "Computer Science",
                        "year": "Freshman",
                        "gpa": 3.7
                    }, {
                        "studentId": 802,
                        "firstName": "Liam",
                        "lastName": "Morgan",
                        "major": "Mechanical Engineering",
                        "year": "Sophomore",
                        "gpa": 3.2
                    }, {
                        "studentId": 803,
                        "firstName": "Emma",
                        "lastName": "Jenkins",
                        "major": "Business Administration",
                        "year": "Junior",
                        "gpa": 3.6
                    }, {
                        "studentId": 804,
                        "firstName": "Noah",
                        "lastName": "Wright",
                        "major": "Computer Science",
                        "year": "Senior",
                        "gpa": 3.8
                    }, {
                        "studentId": 805,
                        "firstName": "Ava",
                        "lastName": "Cook",
                        "major": "Psychology",
                        "year": "Freshman",
                        "gpa": 3.1
                    }, {
                        "studentId": 806,
                        "firstName": "Ethan",
                        "lastName": "Diaz",
                        "major": "Biology",
                        "year": "Sophomore",
                        "gpa": 2.9
                    }, {
                        "studentId": 807,
                        "firstName": "Charlotte",
                        "lastName": "Lopez",
                        "major": "Literature",
                        "year": "Junior",
                        "gpa": 3.5
                    }, {
                        "studentId": 808,
                        "firstName": "Benjamin",
                        "lastName": "Carter",
                        "major": "Marketing",
                        "year": "Senior",
                        "gpa": 3.3
                    }, {
                        "studentId": 809,
                        "firstName": "Sophia",
                        "lastName": "White",
                        "major": "Economics",
                        "year": "Freshman",
                        "gpa": 3
                    }, {
                        "studentId": 810,
                        "firstName": "James",
                        "lastName": "Mitchell",
                        "major": "Physics",
                        "year": "Sophomore",
                        "gpa": 3.4
                    }, {
                        "studentId": 811,
                        "firstName": "Isabella",
                        "lastName": "Foster",
                        "major": "Mathematics",
                        "year": "Junior",
                        "gpa": 3.9
                    }, {
                        "studentId": 812,
                        "firstName": "William",
                        "lastName": "Phillips",
                        "major": "Music",
                        "year": "Senior",
                        "gpa": 2.8
                    }, {
                        "studentId": 813,
                        "firstName": "Mia",
                        "lastName": "Stewart",
                        "major": "Computer Science",
                        "year": "Junior",
                        "gpa": 3.7
                    }, {
                        "studentId": 814,
                        "firstName": "Henry",
                        "lastName": "Clark",
                        "major": "History",
                        "year": "Freshman",
                        "gpa": 3
                    }, {
                        "studentId": 815,
                        "firstName": "Amelia",
                        "lastName": "Murphy",
                        "major": "Philosophy",
                        "year": "Senior",
                        "gpa": 3.2
                    }, {
                        "studentId": 816,
                        "firstName": "Daniel",
                        "lastName": "Reed",
                        "major": "Chemistry",
                        "year": "Junior",
                        "gpa": 3.1
                    }, {
                        "studentId": 817,
                        "firstName": "Chloe",
                        "lastName": "Cox",
                        "major": "Nursing",
                        "year": "Sophomore",
                        "gpa": 3.6
                    }, {
                        "studentId": 818,
                        "firstName": "Logan",
                        "lastName": "Brooks",
                        "major": "Business Administration",
                        "year": "Senior",
                        "gpa": 3.3
                    }, {
                        "studentId": 819,
                        "firstName": "Ella",
                        "lastName": "Dunn",
                        "major": "Sociology",
                        "year": "Freshman",
                        "gpa": 3.5
                    }, {
                        "studentId": 820,
                        "firstName": "Mason",
                        "lastName": "Perry",
                        "major": "Art",
                        "year": "Sophomore",
                        "gpa": 2.7
                    }]}><GridSortColumn path="studentId" header="Student id"/>
                        <GridSortColumn path="firstName" header="First name"/>
                        <GridSortColumn path="lastName" header="Last name"/>
                        <GridSortColumn path="major" header="Major"/>
                        <GridSortColumn path="year" header="Year"/>
                        <GridSortColumn path="gpa" header="Gpa"/></Grid>

                </VerticalLayout>
            </VerticalLayout>
        </div>
    );
}
