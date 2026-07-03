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
