export const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data.map(user => ({
        name: user.name,
        age: Math.floor(Math.random() * 20) + 15, // Random age between 15-35
        grade: 'A', // Static grade for simplicity
        email: user.email,
        phone: user.phone,
        address: user.address.street,
        city: user.address.city,
        state: 'Some State', // Static state for simplicity
        country: 'Some Country', // Static country for simplicity
        zip: user.address.zipcode,
    }));
};
