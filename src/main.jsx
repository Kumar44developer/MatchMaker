import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  Bell,
  Check,
  ChevronRight,
  HeartHandshake,
  LogOut,
  Mail,
  MapPin,
  NotebookPen,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
} from 'lucide-react';
import './styles.css';

const firstNamesFemale = ['Aarohi', 'Ananya', 'Diya', 'Isha', 'Kavya', 'Meera', 'Naina', 'Riya', 'Saanvi', 'Tara', 'Vaishnavi', 'Zoya', 'Tanvi', 'Priya', 'Shruti', 'Aditi', 'Neha', 'Pooja', 'Anika', 'Mira'];
const firstNamesMale = ['Aarav', 'Aditya', 'Arjun', 'Dev', 'Ishaan', 'Kabir', 'Kunal', 'Rohan', 'Sai', 'Vivaan', 'Yash', 'Rahul', 'Nikhil', 'Karthik', 'Varun', 'Akshay', 'Manav', 'Siddharth', 'Vikram', 'Rishi'];
const lastNames = ['Sharma', 'Iyer', 'Rao', 'Menon', 'Kapoor', 'Patel', 'Nair', 'Reddy', 'Mehta', 'Shetty', 'Bose', 'Kulkarni'];
const cities = ['Bengaluru', 'Mumbai', 'Delhi', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad', 'Mysuru', 'Jaipur'];
const castes = ['Brahmin', 'Kshatriya', 'Vaishya', 'Lingayat', 'Vokkaliga', 'Nair', 'Reddy', 'Maratha', 'Kayastha'];
const religions = ['Hindu', 'Jain', 'Sikh', 'Christian', 'Muslim'];
const companies = ['Infosys', 'TCS', 'Google', 'Accenture', 'Zoho', 'Flipkart', 'Deloitte', 'Amazon', 'HDFC Bank', 'Razorpay'];
const roles = ['Product Manager', 'Software Engineer', 'Data Analyst', 'Marketing Lead', 'Doctor', 'Chartered Accountant', 'Architect', 'Consultant', 'Teacher', 'Founder'];
const colleges = ['IIT Madras', 'IIM Bangalore', 'RVCE', 'Christ University', 'BITS Pilani', 'NIT Trichy', 'PES University', 'Manipal University'];
const degrees = ['B.Tech', 'MBA', 'M.Com', 'MBBS', 'B.Arch', 'M.Tech', 'BBA', 'CA'];
const languages = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Marathi', 'Malayalam'];
const values = ['family-oriented', 'career-focused', 'spiritual', 'travel-loving', 'community-minded', 'calm communicat


const assignedCustomers = [
  {
    id: 'c-001',
    firstName: 'Rohan',
    lastName: 'Mehta',
    gender: 'Male',
    dob: '1994-08-14',
    age: 31,
    country: 'India',
    city: 'Bengaluru',
    height: 178,
    email: 'rohan.mehta@example.com',
    phone: '+91 98765 12001',
    college: 'IIM Bangalore',
    degree: 'MBA',
    income: 4200000,
    company: 'Razorpay',
    designation: 'Product Manager',
    maritalStatus: 'Never Married',
    languages: ['English', 'Hindi', 'Kannada'],
    siblings: 'One younger sister',
    caste: 'Vaishya',
    religion: 'Hindu',
    wantKids: 'Yes',
    relocate: 'Maybe',
    pets: 'Yes',                
    status: 'Ready for shortlist',
    tag: 'High Intent',
    values: ['family-oriented', 'career-focused', 'calm communicator'],
    notes: 'Prefers Bengaluru or Mumbai. Family wants a professional match with similar values.',
  },
  {
    id: 'c-002',
    firstName: 'Ananya',
    lastName: 'Iyer',
    gender: 'Female',
    dob: '1996-03-22',
    age: 30,
    country: 'India',
    city: 'Chennai',
    height: 164,
    email: 'ananya.iyer@example.com',
    phone: '+91 98765 12002',
    college: 'BITS Pilani',
    degree: 'M.Tech',
    income: 3000000,
    company: 'Google',
    designation: 'Software Engineer',
    maritalStatus: 'Never Married',
    languages: ['English', 'Tamil', 'Hindi'],
    siblings: 'Only child',
    caste: 'Brahmin',
    religion: 'Hindu',
    wantKids: 'Maybe',
    relocate: 'No',
    pets: 'Maybe',
    status: 'Profile verified',
    tag: 'Needs review',
    values: ['career-focused', 'calm communicator', 'fitness-conscious'],
    notes: 'Strong preference for Chennai or Bengaluru, values education and mutual independence.',
  },
  {
    id: 'c-003',
    firstName: 'Karthik',
    lastName: 'Rao',
    gender: 'Male',
    dob: '1992-11-05',
    age: 33,
    country: 'India',
    city: 'Hyderabad',
    height: 173,
    email: 'karthik.rao@example.com',
    phone: '+91 98765 12003',
    college: 'NIT Trichy',
    degree: 'B.Tech',
    income: 2600000,
    company: 'Amazon',
    designation: 'Software Engineer',
    maritalStatus: 'Divorced',
    languages: ['English', 'Telugu', 'Hindi'],
    siblings: 'One elder brother',
    caste: 'Reddy',
    religion: 'Hindu',
    wantKids: 'Yes',
    relocate: 'Yes',
    pets: 'No',
    status: 'Needs call notes',
    tag: 'Second marriage',
    values: ['family-oriented', 'spiritual', 'community-minded'],
    notes: 'Open to relocation and wants transparent conversations about past marriage.',
  },
];


function choice(list, index, salt = 0) {
  return list[(index + salt) % list.length];
}


function makePool(targetGender) {
  const names = targetGender === 'Female' ? firstNamesFemale : firstNamesMale;
  return Array.from({ length: 100 }, (_, i) => {
    const ageBase = targetGender === 'Female' ? 24 : 29;
    const city = choice(cities, i, 2);
    return {
      id: `p-${targetGender[0].toLowerCase()}-${String(i + 1).padStart(3, '0')}`,
      firstName: choice(names, i),
      lastName: choice(lastNames, i, 4),
      gender: targetGender,
      dob: `${1990 + (i % 10)}-${String((i % 12) + 1).padStart(2, '0')}-14`,
      age: ageBase + (i % 11),
      country: 'India',
      city,
      height: targetGender === 'Female' ? 152 + (i % 18) : 168 + (i % 17),
      email: `${choice(names, i).toLowerCase()}.${choice(lastNames, i).toLowerCase()}${i + 1}@example.com`,
      phone: `+91 90000 ${String(10000 + i).slice(0, 5)}`,
      college: choice(colleges, i, 3),
      degree: choice(degrees, i, 1),
      income: targetGender === 'Female' ? 900000 + (i % 18) * 180000 : 1600000 + (i % 20) * 240000,
      company: choice(companies, i, 5),
      designation: choice(roles, i, 2),
      maritalStatus: i % 19 === 0 ? 'Divorced' : 'Never Married',
      languages: [choice(languages, i), choice(languages, i, 2), 'English'],
      siblings: i % 3 === 0 ? 'One younger sibling' : i % 3 === 1 ? 'Only child' : 'Two siblings',
      caste: choice(castes, i, 1),
      religion: choice(religions, i),
      wantKids: choice(['Yes', 'No', 'Maybe'], i),
      relocate: choice(['Yes', 'No', 'Maybe'], i, 1),
      pets: choice(['Yes', 'No', 'Maybe'], i, 2),
      values: [choice(values, i), choice(values, i, 3), choice(values, i, 5)],
      status: i % 5 === 0 ? 'Verified' : i % 5 === 1 ? 'Intro ready' : i % 5 === 2 ? 'Family review' : i % 5 === 3 ? 'Needs call' : 'New profile',
    };
  });
}

function formatIncome(value) {
  if (value >= 10000000) return `Rs ${(value / 10000000).toFixed(1)} Cr`;
  return `Rs ${(value / 100000).toFixed(1)} LPA`;
}


function scoreMatch(customer, candidate) {
  let score = 28;
  const reasons = [];


  if (customer.gender === 'Male') {
    if (candidate.age < customer.age) { score += 14; reasons.push('younger age preference'); }
    if (candidate.income < customer.income) { score += 10; reasons.push('income aligns with stated male-customer rule'); }
    if (candidate.height < customer.height) { score += 9; reasons.push('height preference aligns'); }
    if (candidate.wantKids === customer.wantKids) { score += 8; reasons.push('children preference matches'); }
  } else {
    if (candidate.age >= customer.age && candidate.age <= customer.age + 6) { score += 12; reasons.push('age range is practical'); }
    if (candidate.income >= customer.income) { score += 10; reasons.push('financial stability is strong'); }
    if (candidate.height > customer.height) { score += 8; reasons.push('height preference aligns'); }
    if (candidate.relocate === 'Yes' || customer.relocate === 'Yes') { score += 8; reasons.push('relocation flexibility'); }
  }


  if (candidate.city === customer.city) { score += 14; reasons.push('same city'); }
  if (candidate.religion === customer.religion) { score += 8; reasons.push('religion match'); }
  if (candidate.caste === customer.caste) { score += 6; reasons.push('caste/community alignment'); }
  if (candidate.maritalStatus === customer.maritalStatus) { score += 5; reasons.push('marital status fit'); }

  const sharedLanguages = candidate.languages.filter((language) => customer.languages.includes(language));
  score += Math.min(sharedLanguages.length * 4, 10);
  if (sharedLanguages.length) reasons.push(`${sharedLanguages.length} shared language${sharedLanguages.length > 1 ? 's

  const sharedValues = candidate.values.filter((value) => customer.values.includes(value));
  score += Math.min(sharedValues.length * 7, 14);
  if (sharedValues.length) reasons.push(`${sharedValues.length} shared value signal${sharedValues.length > 1 ? 's' : ''}`);
                                                                                       
  const capped = Math.min(98, score);
  const label = capped >= 82 ? 'High Potential Match' : capped >= 68 ? 'Strong Fit' : capped >= 54 ? 'Review Worthy' : 'Low Priority';
  return {
    ...candidate,
    score: capped,
    label,
    reasons: reasons.slice(0, 5),
    aiIntro: `Hi ${candidate.firstName}, ${customer.firstName}'s profile stood out because of your ${reasons.slice(0, 2).join(' and ') || 'shared life-stage fit'}. We think this could be a thoughtful conversation to explore.`,
  };
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedId, setSelectedId] = useState(assignedCustomers[0].id);
  const [query, setQuery] = useState('');
  const [activeMatch, setActiveMatch] = useState(null);
  const [toast, setToast] = useState('');
  const [notes, setNotes] = useState(Object.fromEntries(assignedCustomers.map((c) => [c.id, c.notes])));


  const selected = assignedCustomers.find((customer) => customer.id === selectedId);
  const pool = useMemo(() => makePool(selected.gender === 'Male' ? 'Female' : 'Male'), [selected.gender]);
  const matches = useMemo(() => pool.map((candidate) => scoreMatch(selected, candidate)).sort((a, b) => b.score - a.score), [pool, selected]);


  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }


  const filteredCustomers = assignedCustomers.filter((customer) => {
    const text = `${customer.firstName} ${customer.lastName} ${customer.city} ${customer.tag}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><HeartHandshake size={24} /></div>
          <div>
