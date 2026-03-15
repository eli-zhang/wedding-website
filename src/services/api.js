const API_BASE_URL = 'https://enti78yfb0.execute-api.us-west-2.amazonaws.com';

export const checkRSVP = async (name, password = '') => {
    const response = await fetch(`${API_BASE_URL}/rsvp/check`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.trim(),
            password: password.trim()
        }),
    });

    const data = await response.json();
    return { status: response.status, data };
};

export const updateRSVP = async (name, password = '', formData) => {
    const response = await fetch(`${API_BASE_URL}/rsvp/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.trim(),
            password: password.trim(),
            rsvp_status: formData.attendance,
            dietary_restrictions: formData.dietary_restrictions,
            questions: formData.questions
        }),
    });

    const data = await response.json();
    return { status: response.status, data };
};

export const fetchRegistryItems = async () => {
    const response = await fetch(`${API_BASE_URL}/wedding-registry`);
    const data = await response.json();
    return { status: response.status, data };
};
