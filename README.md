# Appclication description

This application is used for entering a company's details and its employees' data.
The application checks all the entered data, and if every input is valid, it displays the submitted results.

## Functional information

The application stores the input, the corresponding validation messages as objects in arrays.

Every time the user modifies an input, the corresponding object is updated and is a message is displayed to the user using React Hooks.

The user can enter the number of required employees and corresponding forms is created for each employee.

If the user increases the number of required employees, the entered data remains intact and new forms are created.

If the user decreases the number of required employees, the unnecessary forms and corresponding data is deleted starting from the last employee, while the rest of the data remains intact starting from the first employee.

If alll the required fields are validated, the result is displayed and a JSON is created.

The user is able to upload CV in a pdf format. The files are stored in an array (and deleted as the number of employees is modified) and after the successful submission, the files are uploaded to an Express server and download links are created on the results page.
The CVs are stored in the build/files folder, named after the employees IDs.
