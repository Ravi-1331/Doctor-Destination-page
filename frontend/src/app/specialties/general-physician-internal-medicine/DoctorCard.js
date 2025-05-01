import styles from './DoctorCard.module.css';

export default function DoctorCard({ doctor }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{doctor.name}</h3>
      <p className={styles.gender}>Gender: {doctor.gender}</p>
      <p className={styles.specialty}>Specialty: {doctor.specialty}</p>
      <p className={styles.experience}>Experience: {doctor.experience} years</p>
      <p className={styles.fee}>Fee: ₹{doctor.consultationFee}</p>
      <p className={styles.location}>Location: {doctor.location}</p>
      <p className={styles.available}>Available: {doctor.availableDays.join(', ')}</p>
      <button className={styles.button}>Book Appointment</button>
    </div>
  );
}
