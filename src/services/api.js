import axios from 'axios';

const API_URL = 'https://65b36193770d43aba479a2f2.mockapi.io/users';

export const fetchContacts = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const fetchContactById = async (id) => {
  const { data } = await axios.get(`${API_URL}/${id}`);
  return data;
};

export const createContact = async (newContact) => {
  const { data } = await axios.post(API_URL, newContact);
  return data;
};

export const updateContact = async (updatedContact) => {
  const { data } = await axios.put(
    `${API_URL}/${updatedContact.id}`,
    updatedContact
  );
  return data;
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
