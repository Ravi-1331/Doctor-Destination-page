// utils/api.js
export const getDoctors = async (filters = {}, page = 1, limit = 10) => {
    const params = new URLSearchParams({ ...filters, page, limit });
    const res = await fetch(`http://localhost:5000/api/list-doctor-with-filter?${params}`);
    if (!res.ok) throw new Error('Failed to fetch doctors');
    return res.json();
  };
  