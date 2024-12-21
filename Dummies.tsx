/**
 * Export dummy data 
 */


/**
 * 
 * @returns Random Status Number
 */
const random_status = () => {
    return Math.floor(Math.random() * 2);
}

const random_arr_value = (arr: string[] | unknown[]) => {
    const x = Math.floor(Math.random() * arr.length);
    return arr[x];
}

/**
 * 
 * @returns [Last Visit, Name, Email, Profile_Pic, Diagnosis, Service, Status] -- Status : 0 = complete, 1 = in progress, 2 = canceled 
 */
export const visit_history = () => {
    const diagnoses = ["Peridontis, Teeth Cleaning, Extraction, Sensivity"];
    const names = ["Kian, Richard, David, Taji, Brian, Peter, Amy, Lester, Marilyn"];
    const services = ["Deep Cleaning, Whitening, Consultation, Dental X-ray"];
    const emails = ["3Kian@gmail.com", "richi@aol.com", "DeeMan@yahoo.com", "Mbaby!123@gmail.com"];
    const dates = ["20/10/2024", "3/12/2024", "3/1/2024", "19/10/2024", "16/10/2024", "11/12/2024", "4/1/2024"]; 
    return [
        [random_arr_value(dates), random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        [random_arr_value(dates), random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        [random_arr_value(dates),  random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        [random_arr_value(dates), random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()] 
    ]
}

/**
 * 
 * @returns [Date, Time, Event, Icon] 
 */
export const my_schedule = () => {

    const dates = ["20/10/2024", "3/12/2024", "3/1/2024", "19/10/2024", "16/10/2024", "11/12/2024", "4/1/2024"];
    const times = ["9:00 am", "9:30 am", "10:00 am", "10:30 am", "12:00 pm", "12:30 pm", "1:00 pm", "2:00 pm", "2:30 pm", "4:00 pm"];
    const events = ["", "Team Meeting", "Whitening", "X-Ray", "Deep Cleaning", "Gum Treatment"];
    return [
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events),""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
        [random_arr_value(dates), random_arr_value(times), random_arr_value(events), ""],
    ]
}



