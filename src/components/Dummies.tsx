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

const random_arr_value = (arr: string | unknown[]) => {
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
    //const dates = []; 
    return [
        ["20/10/2024", random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        ["20/10/2024", random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        ["3/12/2024",  random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()],
        ["11/11/2023", random_arr_value(names), random_arr_value(emails), "", random_arr_value(diagnoses), random_arr_value(services), random_status()] 
    ]
}

/**
 * 
 * @returns [Date, Time, Event, Icon] 
 */
export const my_schedule = () => {
    return [
        ["18/12/2024", "10:00 am", "Team Meeting", ""],
        ["18/1/2024", "9:30 am", "Whitening", ""],
        ["01/3/2024", "11:00 am", "X-Ray",""],
        ["01/12/2024", "12:00 am", "Team Meeting", ""],
        ["02/1/2024", "2:30 pm", "Deep Cleaning", ""],
        ["11/4/2024", "11:00 am", "X-Ray", ""],
        ["06/06/2024", "4:00 pm", "Team Meeting", ""],
        ["18/1/2024", "5:30 pm", "Gum treatment", ""],
        ["18/1/2024", "5:00 pm", "Whitening", ""],
    ]
}


