import { RJSFSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from "@rjsf/core";

const schema: RJSFSchema = {
    title: 'Todo',
    type: 'object',
    required: ['title'],
    properties: {
        title: { type: 'string', title: 'Title', default: 'A new task' },
        done: { type: 'boolean', title: 'Done?', default: false },
    },
};

export const Editor = () => (
    <Form
        schema={schema}
        validator={validator}
        onChange={console.log}
        onSubmit={console.log}
        onError={console.log}
    />
)