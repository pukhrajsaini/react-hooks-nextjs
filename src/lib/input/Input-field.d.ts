export interface InputField {
    name: string,
    type: 'text' | 'textarea' | 'button' | 'number' | 'email' | 'calendar' | 'password'
    placeholder: string;
    label: string;
    id?: string;
    autocomplete?: string;
    required: boolean
}