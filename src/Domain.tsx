import { Create, CreateButton, DateInput, Edit, ExportButton, ListGuesser, SelectColumnsButton, SimpleForm, TextInput, TopToolbar, required } from "react-admin";

export const DomainList = () => <ListGuesser actions={
    (
        <TopToolbar>
            <CreateButton />
            <SelectColumnsButton />
            <ExportButton />
        </TopToolbar>
    )
}></ListGuesser>
export const DomainCreate = () => <Create>
    <SimpleForm>
        <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="description_domaine" validate={[required()]} fullWidth />
        
    </SimpleForm>
</Create>

export const DomainEdit = () => <Edit>
    <SimpleForm>
    <TextInput source="name" validate={[required()]} fullWidth />
        <TextInput source="description_domaine" validate={[required()]} fullWidth />
    </SimpleForm>
</Edit>

