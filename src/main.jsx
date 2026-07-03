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
