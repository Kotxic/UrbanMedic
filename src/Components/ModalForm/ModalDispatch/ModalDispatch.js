// userActions.js

export const createUser = (dispatch, nameError, lastError, emailError, name, nameLast, gender, email, createdUsers, setActive) => {
    if (!nameError && !lastError && !emailError && name && nameLast && email) {
        dispatch({ type: "CREATED_USERS", payload: [{ name: { first: name, last: nameLast }, gender: gender, email: email, generate: true }, ...createdUsers] });
        setActive(false);
    } else {
        console.log("sd");
    }
};

export const deleteUser = (dispatch, nameError, lastError, emailError, email, createdUsers, setActive) => {
    dispatch({ type: "CREATED_USERS", payload: createdUsers.filter(item => item.email !== email) });
    setActive(false);

};

export const updateUser = (dispatch, nameError, lastError, emailError, name, nameLast, gender, email, user, createdUsers, setActive) => {
    if (!nameError && !lastError && !emailError && name && nameLast && email) {
        const updateUser = { name: { first: name, last: nameLast }, gender: gender, email: email, generate: true };
        dispatch({
            type: "CREATED_USERS",
            payload: createdUsers.map(item =>
                item.email === user.email ? { ...item, ...updateUser } : item
            )
        });
        setActive(false);
    } else {
        console.log("sd");
    }
};
