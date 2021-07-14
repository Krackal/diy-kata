const getEmployerRole = (employeeName, employees) => {
    const getRole = employees.find((person) => person.name === employeeName);
    return getRole.role;
};

module.exports = getEmployerRole;