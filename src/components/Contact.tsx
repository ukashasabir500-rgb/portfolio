import React, { useState } from 'react';
import { motion } from 'motion/react';
import Section from './Section';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Interview',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const subjects = ['Interview', 'Freelance', 'Collaboration', 'General Inquiry'];

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.length > 0 && value.length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        if (value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Please enter a valid email address';
        break;
      case 'message':
        if (value.length > 0 && value.length < 10) error = 'Message must be at least 10 characters';
        break;
    }
    setErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name in errors) {
      validateField(name, value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Final validation check
    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMessageValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      setStatus('error');
      setErrorMessage('Please fix the errors before submitting.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'Interview', message: '' });
        setErrors({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.error?.message || result.error || 'Failed to send message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage('Could not connect to the server.');
    }
  };

  return (
    <Section id="contact" title="Get in Touch" className="bg-slate-50 dark:bg-slate-900/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info Column */}
        <div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            I'm currently looking for <span className="text-slate-900 dark:text-teal-400 font-semibold">Junior UI/UX opportunities</span>. 
            Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand-indigo shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:ukashasabir500@gmail.com" className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-brand-indigo transition-colors" id="contact-email">
                  ukashasabir500@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-brand-teal shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+923153077283" className="text-lg font-bold text-slate-800 dark:text-slate-200 hover:text-brand-teal transition-colors" id="contact-phone">
                  +92 315 3077283
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm border border-slate-200 dark:border-slate-700 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">Location</p>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">Available Remotely & Local</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-slate-900 border border-slate-800 text-white rounded-xl p-8 md:p-10 flex flex-col gap-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-teal-400">Send a Message</h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit} id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Full Name"
                  className={`input-field !bg-slate-800 !border-slate-700 !text-white placeholder-slate-500 py-3 focus:!border-teal-400 focus:!ring-teal-400 ${errors.name ? '!border-red-500' : ''}`}
                  value={formData.name}
                  onChange={handleInputChange}
                  id="input-name"
                />
                {errors.name && <p className="text-[10px] text-red-400 font-bold ml-1">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1">
                <select 
                  name="subject"
                  className="input-field !bg-slate-800 !border-slate-700 !text-white py-3 focus:!border-teal-400 focus:!ring-teal-400"
                  value={formData.subject}
                  onChange={handleInputChange}
                  id="input-subject"
                >
                  {subjects.map(s => <option key={s} value={s} className="bg-slate-800">{s}</option>)}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <input 
                type="email" 
                name="email"
                required
                placeholder="Email Address"
                className={`input-field !bg-slate-800 !border-slate-700 !text-white placeholder-slate-500 py-3 focus:!border-teal-400 focus:!ring-teal-400 ${errors.email ? '!border-red-500' : ''}`}
                value={formData.email}
                onChange={handleInputChange}
                id="input-email"
              />
              {errors.email && <p className="text-[10px] text-red-400 font-bold ml-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col gap-1">
              <textarea 
                name="message"
                rows={3}
                required
                placeholder="Project Details (Problem Statement, Timeline...)"
                className={`input-field !bg-slate-800 !border-slate-700 !text-white placeholder-slate-500 py-3 resize-none focus:!border-teal-400 focus:!ring-teal-400 ${errors.message ? '!border-red-500' : ''}`}
                value={formData.message}
                onChange={handleInputChange}
                id="input-message"
              ></textarea>
              {errors.message && <p className="text-[10px] text-red-400 font-bold ml-1">{errors.message}</p>}
            </div>

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="accent-bg py-4 rounded text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
            >
               {status === 'loading' ? 'Sending...' : 'Send Message'}
               <Send size={14} />
            </button>
            
            {status === 'success' && (
              <p className="text-[11px] text-teal-400 font-bold bg-teal-400/10 p-4 rounded-lg text-center border border-teal-400/20">
                Message sent successfully! Check your email soon.
              </p>
            )}
            {status === 'error' && (
              <div className="text-[11px] text-red-400 font-bold bg-red-400/10 p-4 rounded-lg text-center border border-red-400/20">
                <p className="mb-2">Error: {errorMessage}</p>
                {errorMessage.toLowerCase().includes('api key') || errorMessage.toLowerCase().includes('missing') ? (
                  <div className="space-y-2 mt-2 pt-2 border-t border-red-400/20 font-medium">
                    <p>1. Get a free API key at <a href="https://resend.com" target="_blank" rel="noreferrer" className="underline text-red-300">Resend.com</a></p>
                    <p>2. Open <b>Settings</b> &gt; <b>Secrets</b></p>
                    <p>3. Add <b>RESEND_API_KEY</b> with your key</p>
                  </div>
                ) : (
                  <p className="font-medium opacity-80">Check the server logs or try again later.</p>
                )}
              </div>
            )}
          </form>

          <div className="flex flex-wrap gap-6 mt-4 pt-6 border-t border-slate-800">
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
               ukashasabir500@gmail.com
            </div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
               +92 315 3077283
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
