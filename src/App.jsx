import { useEffect, useMemo, useState } from 'react'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('home')
  const navItems = useMemo(
    () => [
      { id: 'home', label: 'Home' },
      { id: 'solutions', label: 'Solutions' },
      { id: 'platforms', label: 'Platforms' },
      { id: 'research', label: 'Research' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  useEffect(() => {
    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [navItems])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  const FeatureIcon = ({ children }) => (
    <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center ring-1 ring-indigo-600/20">
      {children}
    </div>
  )

  const features = [
    {
      title: 'Perception Suite',
      desc: 'Multi-sensor fusion with robust SLAM and 3D scene understanding for dynamic environments.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
      ),
    },
    {
      title: 'Motion Planning',
      desc: 'Real-time trajectory optimization with collision avoidance and whole-body control.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4.707 4.707a1 1 0 0 1-1.414 0L5.879 7.707A1 1 0 1 1 7.293 6.293L9.586 8.586V3a1 1 0 0 1 1-1h1.414z" />
          <path d="M4 16a8 8 0 1 0 16 0h-2a6 6 0 1 1-12 0H4z" />
        </svg>
      ),
    },
    {
      title: 'Edge AI',
      desc: 'On-device inference for perception and control with power-aware scheduling.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v3H4V6z" />
          <path d="M4 11h16v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7z" />
        </svg>
      ),
    },
    {
      title: 'HRI Toolkit',
      desc: 'Safe and intuitive human-robot collaboration with intent prediction and voice control.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10z" />
          <path fillRule="evenodd" d="M2 20a8 8 0 0116 0v2H2v-2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  const robots = [
    {
      name: 'Atlas-X',
      img: 'https://images.unsplash.com/photo-1581091014534-7c24f7d3a99b?q=80&w=1200&auto=format&fit=crop',
      spec: 'Agile humanoid for industrial inspection and logistics.',
      tags: ['Humanoid', 'Bipedal', 'Autonomous'],
    },
    {
      name: 'Astra-Drone',
      img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      spec: 'Autonomous aerial vehicle with on-edge vision navigation.',
      tags: ['UAV', 'CV', 'Mapping'],
    },
    {
      name: 'Nova-Arm',
      img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
      spec: 'Collaborative robotic arm for precision assembly.',
      tags: ['Cobotics', '6-DOF', 'Safety'],
    },
  ]

  const stats = [
    { k: '99.95%', v: 'Uptime in mission-critical deployments' },
    { k: '200ms', v: 'End-to-end perception-to-actuation latency' },
    { k: '+30%', v: 'Throughput gain vs. legacy automation' },
    { k: '50+', v: 'Global research partners' },
  ]

  function handleSubmit(e) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    if (!data.name || !data.email) {
      alert('Please provide your name and email to continue.')
      return
    }
    console.log('Demo request:', data)
    alert('Thank you! Our team will get in touch shortly.')
    e.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
      {/* Background accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-96 w-[60rem] -translate-x-1/2 bg-gradient-to-r from-indigo-600/30 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 bg-indigo-600/10 rounded-full blur-2xl" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-600/30">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="white">
                  <path d="M7 3h10l4 7-9 11L3 10 7 3z" />
                </svg>
              </div>
              <span className="font-semibold tracking-wide">Axiom Robotics</span>
            </div>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active === item.id ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="ml-2 inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
              >
                Get a Demo
              </button>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden border-t border-white/5">
              <div className="space-y-1 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm ${
                      active === item.id ? 'bg-white/5 text-white' : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-3 pt-2">
                  <button
                    onClick={() => scrollTo('contact')}
                    className="w-full inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500"
                  >
                    Get a Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Now shipping v3.2 autonomy stack
              </div>
              <h1 className="mt-5 text-4xl sm:text-6xl font-bold tracking-tight">
                Shaping the Future of Robotics
              </h1>
              <p className="mt-5 text-lg text-slate-300 max-w-xl">
                Build, deploy, and scale intelligent robots with our end-to-end platform for perception, planning, and control.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={() => scrollTo('contact')} className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                  Request a Demo
                </button>
                <button onClick={() => scrollTo('platforms')} className="inline-flex items-center rounded-md px-5 py-3 text-sm font-semibold text-slate-100 ring-1 ring-white/10 hover:bg-white/5">
                  Explore Robots
                </button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {stats.slice(0,3).map((s) => (
                  <div key={s.k} className="">
                    <div className="text-2xl font-bold text-white">{s.k}</div>
                    <div className="text-xs text-slate-400">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600/20 to-cyan-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
                <img
                  className="h-[420px] w-full object-cover"
                  src="https://images.unsplash.com/photo-1581093588401-16ec8a187dd1?q=80&w=1400&auto=format&fit=crop"
                  alt="Robotics hero"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-6">
                  <p className="text-sm text-slate-200">Autonomy in motion: real-time mapping and manipulation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 opacity-80">
            <p className="text-xs uppercase tracking-wider text-slate-400">Trusted by teams at</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Siemens','Airbus','NASA','Toyota','Bosch','MIT'].map((l) => (
                <div key={l} className="flex items-center gap-2 text-slate-400">
                  <div className="h-6 w-6 rounded bg-white/5" />
                  <span className="text-sm">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">Solutions engineered for the real world</h2>
            <p className="mt-3 text-slate-300">From factories to field robotics, our stack powers reliable autonomy across domains.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 hover:ring-white/20 transition">
                <FeatureIcon>{f.icon}</FeatureIcon>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
                <div className="mt-4 inline-flex items-center text-indigo-400 text-sm">
                  Learn more
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms / Robots */}
      <section id="platforms" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Robotic platforms</h2>
              <p className="mt-3 text-slate-300 max-w-2xl">Pick from battle-tested platforms or bring your own hardware. Our SDK integrates with ROS 2, microcontrollers, and custom sensors.</p>
            </div>
            <button onClick={() => scrollTo('contact')} className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15 ring-1 ring-white/10">
              Talk to an engineer
            </button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {robots.map((r) => (
              <div key={r.name} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
                <div className="relative">
                  <img src={r.img} alt={r.name} className="h-52 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-black/40 px-2 py-1 text-xs text-white ring-1 ring-white/10">{r.tags.join(' • ')}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{r.name}</h3>
                    <span className="text-xs text-slate-400">SDK Ready</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300">{r.spec}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="text-sm text-indigo-400 hover:text-indigo-300">Datasheet</button>
                    <button onClick={() => scrollTo('contact')} className="text-sm rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500">Request quote</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-10">
                <h3 className="text-2xl font-semibold">See our autonomy in action</h3>
                <p className="mt-2 text-slate-300">Watch a quick overview of our perception, planning, and control loop deployed on real hardware.</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300 list-disc list-inside">
                  <li>On-device semantic segmentation</li>
                  <li>Dynamic obstacle avoidance</li>
                  <li>Natural language tasking</li>
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-video w-full bg-black/60">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/9N9xP3Y2V7M?rel=0"
                    title="Robotics Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">From lab to deployment</h2>
            <p className="mt-3 text-slate-300">We collaborate with universities and labs to translate breakthroughs into robust products.</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-semibold">Open Research</h3>
              <p className="mt-2 text-sm text-slate-300">Peer-reviewed publications and reproducible benchmarks in perception and control.</p>
              <div className="mt-4 text-sm text-indigo-400">View papers →</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-semibold">Simulation to Reality</h3>
              <p className="mt-2 text-sm text-slate-300">Domain randomization and hardware-in-the-loop pipelines that bridge the sim2real gap.</p>
              <div className="mt-4 text-sm text-indigo-400">Explore sim suite →</div>
            </div>
            <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <h3 className="font-semibold">Safety & Ethics</h3>
              <p className="mt-2 text-sm text-slate-300">Built-in guardrails, fail-safes, and transparent evaluation for responsible deployment.</p>
              <div className="mt-4 text-sm text-indigo-400">Read our charter →</div>
            </div>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="text-3xl font-semibold text-white">{s.k}</div>
                <div className="text-sm text-slate-300 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">Request a demo</h2>
              <p className="mt-3 text-slate-300">Tell us about your use case and hardware. Our engineers will tailor a walkthrough for your team.</p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14H7v-2h6v2zm4-4H7V8h10v4z"/></svg>
                  </div>
                  <div>
                    <div className="font-medium">ROS 2 Native</div>
                    <div className="text-sm text-slate-300">Seamless integration with DDS, rclcpp/rclpy, and micro-ROS.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-6 w-6 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5a2 2 0 012-2h6l2 2h6a2 2 0 012 2v2H3V5z"/><path d="M3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></svg>
                  </div>
                  <div>
                    <div className="font-medium">Fleet Ops</div>
                    <div className="text-sm text-slate-300">Over-the-air updates, telemetry, and observability for entire fleets.</div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-slate-300">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Email</label>
                  <input name="email" required type="email" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-300">Company</label>
                  <input name="company" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Acme Robotics" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-slate-300">Use case</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-md bg-white/10 px-3 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Tell us about your application..." />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-xs text-slate-300">
                  <input type="checkbox" name="nda" className="h-3.5 w-3.5 rounded bg-white/10" />
                  Share NDA template
                </label>
                <button type="submit" className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500">
                  Submit request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="white"><path d="M7 3h10l4 7-9 11L3 10 7 3z" /></svg>
              </div>
              <div>
                <div className="font-semibold">Axiom Robotics</div>
                <div className="text-xs text-slate-400">© {new Date().getFullYear()} All rights reserved.</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <button onClick={() => scrollTo('solutions')} className="hover:text-slate-200">Solutions</button>
              <button onClick={() => scrollTo('platforms')} className="hover:text-slate-200">Platforms</button>
              <button onClick={() => scrollTo('research')} className="hover:text-slate-200">Research</button>
              <a href="#" className="hover:text-slate-200">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
