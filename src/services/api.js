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
    // Convert plus_one_names string to list if it's a string
    const plusOneList = typeof formData.plus_one_names === 'string'
        ? formData.plus_one_names.split(',').map(n => n.trim()).filter(n => n)
        : formData.plus_one_names;

    const response = await fetch(`${API_BASE_URL}/rsvp/update`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name.trim(),
            password: password.trim(),
            rsvp_status: formData.attendance,
            plus_one_names: plusOneList,
            dietary_restrictions: formData.dietary_restrictions,
            questions: formData.questions
        }),
    });

    const data = await response.json();
    return { status: response.status, data };
};
