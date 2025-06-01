let registerEvent = (eventName, eventDate, callback) => {
    if (callback && typeof callback === 'function') {
        callback(eventName, eventDate);
    }
};

let displayConfirmation = (eventName, eventDate) => {
    console.log(`Event ${eventName} has been on ${eventDate} successfully registered`);
};

registerEvent('Birthday', '2023-12-31', displayConfirmation);