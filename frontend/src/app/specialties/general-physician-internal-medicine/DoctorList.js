'use client';
import { useEffect, useState } from 'react';
import Filters from './Filters';
import DoctorCard from './DoctorCard';
import styles from './styles.module.css';

const API_BASE = 'http://localhost:5000/api/doctors';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        let url = '';
        const hasFilters = Object.keys(filters).length > 0;

        if (hasFilters) {
          const params = new URLSearchParams({ ...filters, page });
          url = `${API_BASE}/list-doctor-with-filter?${params}`;
        } else {
          url = `${API_BASE}/all-doctors`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (hasFilters) {
          setDoctors(data.doctors);
          setTotal(data.total);
        } else {
          setDoctors(data);
          setTotal(data.length);
        }
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [filters, page]);

  return (
    <div className={styles.doctorListWrapper}>
      <Filters setFilters={setFilters} />
      <div className={styles.cardContainer}>
        {doctors.map((doc) => (
          <DoctorCard key={doc._id} doctor={doc} />
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)} disabled={page * 10 >= total}>
          Next
        </button>
      </div>
    </div>
  );
}
