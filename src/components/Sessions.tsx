import { motion } from 'framer-motion'
import { ArrowRight, Building2, GraduationCap, Home, Globe, Lock, type LucideIcon } from 'lucide-react'
import { useState } from 'react'

const VENUES: { Ico: LucideIcon; title: string; desc: string }[] = [
  { Ico: Building2, title: 'Corporate', desc: 'Employee cyber hygiene & fraud prevention' },
  { Ico: GraduationCap, title: 'School / College', desc: 'Student safety, social media, cyberbullying' },
  { Ico: Home, title: 'RWA / Housing Society', desc: 'Senior scam prevention, UPI fraud, home safety' },
  { Ico: Globe, title: 'Other / NGO / Govt', desc: 'Custom sessions for any community' },
]

export default function Sessions() {
  const [venue, setVenue] = useState(0)

  return (
    <section id="sessions" className="bg-cream px-4 sm:px-6 lg:px-8 py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-brand text-xs font-bold uppercase tracking-[0.15em] mb-4">Book a Session</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Request a <span className="text-brand italic">Cyber Awareness</span> Session
          </h2>
          <p className="text-ink-mid text-base sm:text-lg leading-relaxed mt-5">
            Our CCIOs come to you. Choose your venue type and we'll match you with a trained officer for a session made for your community.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12">
          {VENUES.map(({ Ico, title, desc }, i) => (
            <button
              key={title}
              onClick={() => setVenue(i)}
              className={`text-left rounded-2xl p-5 sm:p-6 transition-all ${
                venue === i
                  ? 'bg-brand-pale border-2 border-brand'
                  : 'bg-white border-2 border-border hover:border-brand-lt'
              }`}
            >
              <Ico className="w-6 h-6 text-brand mb-2.5" strokeWidth={1.7} />
              <h4 className="font-bold text-sm sm:text-base text-ink mb-1">{title}</h4>
              <p className="text-xs text-muted leading-snug">{desc}</p>
            </button>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          onSubmit={(e) => { e.preventDefault(); alert("Thanks! A coordinator will be in touch within 48 hours.") }}
          className="bg-white border border-border rounded-3xl p-8 sm:p-12 mt-8"
        >
          <h3 className="font-serif text-2xl text-ink mb-1.5">Session Request Form</h3>
          <p className="text-sm text-muted mb-8">
            Fill in the details and a CopConnect coordinator will reach you within 48 hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Contact Person Name *" placeholder="Your full name" />
            <Field label="Organisation / Institution *" placeholder="Company / School / RWA name" />
            <Field label="Mobile Number *" type="tel" placeholder="+91" />
            <Field label="Email Address *" type="email" placeholder="you@organisation.com" />
            <Field label="City / Location *" placeholder="Bengaluru, Mumbai…" />
            <SelectField label="Expected Audience Size" options={['Select range', 'Under 25', '25–100', '100–500', '500+']} />
            <Field label="Preferred Date" type="date" />
            <SelectField label="Session Format" options={['In-person', 'Virtual / Online', 'Hybrid']} />
          </div>

          <div className="mt-5">
            <SelectField
              label="Primary Topic of Interest"
              options={[
                'General Cyber Safety & Hygiene',
                'UPI / Financial Fraud Prevention',
                'Social Media Safety & Privacy',
                'Cyberbullying Awareness',
                'Senior Citizen Cyber Safety',
                'Child Online Protection',
                'Phishing & Scam Awareness',
                'Incident Reporting & LEA Connect',
              ]}
            />
          </div>

          <div className="mt-5">
            <label className="block text-sm font-semibold text-ink-mid mb-2">Special Requirements or Notes</label>
            <textarea
              placeholder="Tell us about your audience, specific concerns, accessibility needs…"
              rows={4}
              className="w-full bg-cream border-[1.5px] border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:bg-white transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-[#d4541c] text-white font-semibold text-base rounded-full px-7 py-3.5 transition-all hover:scale-[1.03] shadow-[0_10px_30px_-10px_rgba(232,101,42,0.5)]"
          >
            Submit Session Request
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-muted mt-4 inline-flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-muted" strokeWidth={1.8} />
            Your information is secure. Sessions are subsidised for schools and NGOs.
          </p>
        </motion.form>
      </div>
    </section>
  )
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink-mid mb-2">{label}</label>
      <input
        {...rest}
        className="w-full bg-cream border-[1.5px] border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:bg-white transition-colors"
      />
    </div>
  )
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-ink-mid mb-2">{label}</label>
      <select className="w-full bg-cream border-[1.5px] border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:bg-white transition-colors">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}
