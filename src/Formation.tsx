import { CloneButton, Create, Datagrid, DateField, Edit, List, NumberField, NumberInput, ReferenceField, ReferenceInput, SelectField, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';

export const FormationList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="formation_name" />
            <SelectField source="formation_type" choices={[
                { id: 'jour', name: 'Jour' },
                { id: 'soir', name: 'Soir' },
                { id: 'weekend', name: 'Weekend' },
            ]} />
            <SelectField source="class_format" choices={[
                { id: 'prensentiel', name: 'Présentiel' },
                { id: 'online', name: 'En ligne' },
            ]} />
            <TextField source="accreditation" />
            <NumberField source="formation_duration" />
            <TextField source="study_level_required" />
            <NumberField source="registration_payment" />
            <NumberField source="monthly_payment" />
            <ReferenceField source="school_id" reference="schools" />
            <ReferenceField source="formation_grade_id" reference="formation_grades" />
            <ReferenceField source="sub_domain_id" reference="subdomains" />
            <DateField source="created_at" />
            <DateField source="updated_at" />
            <CloneButton></CloneButton>
        </Datagrid>
    </List>
)

export const FormationEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="formation_name" />
            <SelectInput source="formation_type" choices={[
                { id: 'jour', name: 'Jour' },
                { id: 'soir', name: 'Soir' },
                { id: 'weekend', name: 'Weekend' },
            ]} />
            <SelectInput source="class_format" choices={[
                { id: 'prensentiel', name: 'Présentiel' },
                { id: 'online', name: 'En ligne' },
            ]} />
            <TextInput source="accreditation" />
            <NumberInput source="formation_duration" />
            <TextInput source="study_level_required" />
            <NumberInput source="registration_payment" />
            <NumberInput source="monthly_payment" />
            <ReferenceInput source="school_id" reference="schools" />
            <ReferenceInput source="formation_grade_id" reference="formation_grades" />
            <ReferenceInput source="sub_domain_id" reference="subdomains" />
        </SimpleForm>
    </Edit>
);
export const FormationCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="formation_name" />
            <SelectInput source="formation_type" choices={[
                { id: 'jour', name: 'Jour' },
                { id: 'soir', name: 'Soir' },
                { id: 'weekend', name: 'Weekend' },
            ]} />
            <SelectInput source="class_format" choices={[
                { id: 'prensentiel', name: 'Présentiel' },
                { id: 'online', name: 'En ligne' },
            ]} />
            <TextInput source="accreditation" />
            <NumberInput source="formation_duration" />
            <TextInput source="study_level_required" />
            <NumberInput source="registration_payment" />
            <NumberInput source="monthly_payment" />
            <ReferenceInput source="school_id" reference="schools" />
            <ReferenceInput source="formation_grade_id" reference="formation_grades" />
            <ReferenceInput source="sub_domain_id" reference="subdomains" />
        </SimpleForm>
    </Create>
);