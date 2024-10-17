export const billingDetailsFields = [
  { name: "firstName", type: "text", placeholder: "First name", required: true, errorMessage: "First name is required" },
  { name: "lastName", type: "text", placeholder: "Last name", required: true, errorMessage: "Last name is required" },
  { name: "email", type: "email", placeholder: "Email address", required: true, errorMessage: "Email is required" },
];

export const billingDeliveryFields = [
  { name: "city", type: "text", placeholder: "City", required: true, errorMessage: "City is required" },
  { name: "address", type: "text", placeholder: "Address", required: true, errorMessage: "Address is required" },
  { name: "apartments", type: "text", placeholder: "Apartments, suite", required: false },
  { name: "phone", type: "tel", placeholder: "Phone", required: true, errorMessage: "Phone number is required" },
];