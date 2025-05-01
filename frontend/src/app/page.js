// app/specialties/general-physician-internal-medicine/page.jsx
import DoctorList from './specialties/general-physician-internal-medicine/DoctorList';
import { metadata } from '../seo/metadata';
import './globals.css'
// import Footer from '../components/Footer';

export const generateMetadata = () => metadata;

export default function GeneralPhysicianPage() {
  return (
    <>
      <main className="container">
        <h1>General Physicians / Internal Medicine</h1>
        <DoctorList />
      </main>
      {/* <Footer/> */}
    </>
  );
}
