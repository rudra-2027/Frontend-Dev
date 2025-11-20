class FormBuilder {
  constructor(fields) {
    this.fields = fields;
  }

  generateForm(containerId) {
    const container = document.getElementById(containerId);

    let html = "";

    this.fields.forEach((field) => {
      html += `
        <label>${field.label}</label>
        <input type="${field.type}" id="${field.label.replace(/\s+/g, "")}">
      `;
    });

    container.innerHTML = html;
  }

  getFormData() {
    const data = {};

    this.fields.forEach((field) => {
      const id = field.label.replace(/\s+/g, "");
      data[field.label] = document.getElementById(id).value;
    });

    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "number", label: "Age" },
  { type: "password", label: "Password" },
];

const formBuilder = new FormBuilder(fields);

formBuilder.generateForm("formContainer");

function submitForm() {
  const data = formBuilder.getFormData();

  document.getElementById("outputBox").textContent = JSON.stringify(
    data,
    null,
    2
  );
}
