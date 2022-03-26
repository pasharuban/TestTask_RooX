export const getFormData = (form: any, elements: number) => {
  const formData = [];
  for (let index = 0; index < elements; index++) {
    formData.push([form[index].name, form[index].value]);
  }

  return JSON.stringify(Object.fromEntries(formData));
};
