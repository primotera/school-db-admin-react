import { Create, CreateButton, DateInput, Edit, ExportButton, ListGuesser, SelectColumnsButton, SimpleForm, TextInput, TopToolbar, required } from "react-admin";

export const SchoolList = () => <ListGuesser actions={
    (
        <TopToolbar>
            <CreateButton />
            <SelectColumnsButton />
            <ExportButton />
        </TopToolbar>
    )
}></ListGuesser>
export const SchoolCreate = () => <Create>
    <SimpleForm>
        <TextInput source="school_name" validate={[required()]} fullWidth />
        <TextInput source="phone" />
        <TextInput source="mobile" />
        <TextInput source="email" />
        <TextInput source="address" />
        <TextInput source="website" />
    </SimpleForm>
</Create>

export const SchoolEdit = () => <Edit>
    <SimpleForm>
        <TextInput source="school_name" validate={[required()]} fullWidth />
        <TextInput source="phone" />
        <TextInput source="mobile" />
        <TextInput source="email" />
        <TextInput source="address" />
        <TextInput source="website" />
    </SimpleForm>
</Edit>

