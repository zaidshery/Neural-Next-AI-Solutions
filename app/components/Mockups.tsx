import {
  ArrowUpRight,
  Bot,
  Building2,
  CalendarDays,
  Check,
  Home,
  MapPin,
  MessageCircle,
  Search,
  Send,
  Star,
  TrendingUp,
} from "lucide-react"

function BrowserChrome({ label = "neuralnext.ai" }: { label?: string }) {
  return (
    <div className="browser-chrome">
      <span className="chrome-dot chrome-dot--red" />
      <span className="chrome-dot chrome-dot--yellow" />
      <span className="chrome-dot chrome-dot--green" />
      <span className="browser-url">{label}</span>
    </div>
  )
}

export function WebsitePreview() {
  return (
    <div className="mockup browser-mockup website-preview" aria-label="Website landing page preview">
      <BrowserChrome />
      <div className="website-canvas">
        <div className="mini-nav">
          <span className="mini-logo">N</span>
          <span />
          <span />
          <button>Start</button>
        </div>
        <div className="mini-hero">
          <div>
            <span className="mini-kicker">BUILD BETTER</span>
            <strong>Intelligent growth,<br />designed to convert.</strong>
            <p>Fast systems for ambitious businesses.</p>
            <button>Book a call <ArrowUpRight size={10} /></button>
          </div>
          <div className="mini-product-card">
            <span className="mini-orb" />
            <span className="mini-stat">+38%</span>
            <small>Conversion lift</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ChatPreview({ whatsapp = false }: { whatsapp?: boolean }) {
  return (
    <div className={`mockup chat-mockup ${whatsapp ? "chat-mockup--whatsapp" : ""}`} aria-label={whatsapp ? "WhatsApp chatbot preview" : "AI chatbot preview"}>
      <div className="chat-header">
        <span className="chat-avatar">{whatsapp ? <MessageCircle size={14} /> : <Bot size={15} />}</span>
        <span><strong>{whatsapp ? "NeuralNext Sales" : "AI Assistant"}</strong><small>Online now</small></span>
        <span className="online-dot" />
      </div>
      <div className="chat-body">
        <div className="bubble bubble--bot">Hi! How can I help your business grow today?</div>
        <div className="bubble bubble--user">I need more qualified leads.</div>
        <div className="bubble bubble--bot">Perfect. I can map a plan and book a free strategy call.</div>
        <div className="typing"><span /><span /><span /></div>
      </div>
      <div className="chat-input"><span>Type a message...</span><Send size={13} /></div>
    </div>
  )
}

export function DashboardPreview() {
  const bars = [38, 58, 44, 76, 62, 88, 72]
  return (
    <div className="mockup dashboard-mockup" aria-label="CRM analytics dashboard preview">
      <div className="dashboard-top">
        <span><small>Pipeline revenue</small><strong>₹8.42L</strong></span>
        <span className="positive"><TrendingUp size={12} /> 28.4%</span>
      </div>
      <div className="bar-chart">
        {bars.map((height, index) => <span key={height + index} style={{ "--bar-height": `${height}%` } as React.CSSProperties} />)}
      </div>
      <div className="dashboard-table">
        <div><span>Riya Sharma</span><b>Qualified</b><small>₹1.2L</small></div>
        <div><span>Acme Realty</span><b>Proposal</b><small>₹2.8L</small></div>
        <div><span>Northstar</span><b>New lead</b><small>₹84K</small></div>
      </div>
    </div>
  )
}

export function FunnelPreview() {
  return (
    <div className="funnel-preview" aria-label="Marketing funnel conversion preview">
      <div><span>12,480</span><small>Visitors</small><b>100%</b></div>
      <div><span>3,214</span><small>Leads</small><b>25.8%</b></div>
      <div><span>842</span><small>Qualified</small><b>26.2%</b></div>
      <div><span>186</span><small>Customers</small><b>22.1%</b></div>
    </div>
  )
}

export function CalendarPreview() {
  const posts = [2, 5, 8, 12, 16, 19, 23, 26]
  return (
    <div className="calendar-preview" aria-label="Social media content calendar preview">
      <div className="calendar-head"><strong>June content plan</strong><span><CalendarDays size={13} /> 18 scheduled</span></div>
      <div className="calendar-days">{["M", "T", "W", "T", "F", "S", "S"].map((day, i) => <b key={`${day}-${i}`}>{day}</b>)}</div>
      <div className="calendar-grid">
        {Array.from({ length: 28 }, (_, i) => i + 1).map(day => (
          <span key={day} className={posts.includes(day) ? "has-post" : ""}>{day}{posts.includes(day) ? <i /> : null}</span>
        ))}
      </div>
    </div>
  )
}

export function WorkflowPreview() {
  return (
    <div className="workflow-preview" aria-label="Business automation workflow preview">
      <svg viewBox="0 0 300 180" role="img" aria-label="Lead automation workflow">
        <path d="M65 40 C115 40 100 90 150 90 C200 90 185 140 235 140" />
        <path d="M65 140 C115 140 100 90 150 90 C200 90 185 40 235 40" />
      </svg>
      <span className="workflow-node node-a"><MessageCircle size={15} /><small>New lead</small></span>
      <span className="workflow-node node-b"><Bot size={15} /><small>AI qualify</small></span>
      <span className="workflow-node node-c"><Check size={15} /><small>CRM sync</small></span>
      <span className="workflow-node node-d"><Send size={15} /><small>Follow-up</small></span>
      <span className="workflow-node node-center"><span className="node-pulse" /><small>Route</small></span>
    </div>
  )
}

export function PropertySystemPreview() {
  return (
    <div className="case-preview property-preview">
      <BrowserChrome label="mumbaihomes.in" />
      <div className="property-toolbar"><strong>Find your next address</strong><span><Search size={12} /> Search Mumbai</span></div>
      <div className="property-layout">
        <div className="property-list">
          {["Sea-facing 3BHK", "Modern Bandra Loft"].map((name, i) => (
            <div className="property-card" key={name}>
              <span className={`property-image property-image--${i + 1}`}><Home size={21} /></span>
              <span><strong>{name}</strong><small><MapPin size={9} /> {i ? "Bandra West" : "Worli"}</small><b>{i ? "₹4.2 Cr" : "₹6.8 Cr"}</b></span>
            </div>
          ))}
        </div>
        <div className="mini-map"><span /><i /><b /></div>
      </div>
    </div>
  )
}

export function SchoolSystemPreview() {
  return (
    <div className="case-preview school-preview">
      <div className="school-header"><span><Building2 size={16} /></span><strong>Oakridge Admissions</strong><small>2026-27 applications</small></div>
      <div className="school-chat">
        <div className="bubble bubble--bot">Which grade are you applying for?</div>
        <div className="bubble bubble--user">Grade 6, CBSE.</div>
        <div className="admission-card"><Check size={13} /><span><strong>3 slots available</strong><small>Campus tour · Saturday, 11 AM</small></span><button>Book</button></div>
      </div>
    </div>
  )
}

export function LocalGrowthPreview() {
  return (
    <div className="case-preview local-preview">
      <div className="local-stat"><span><small>Google position</small><strong>#2</strong></span><TrendingUp size={22} /></div>
      <div className="ranking-chart"><span style={{ height: "34%" }} /><span style={{ height: "48%" }} /><span style={{ height: "66%" }} /><span style={{ height: "86%" }} /><span style={{ height: "96%" }} /></div>
      <div className="review-row"><span><Star size={12} fill="currentColor" /> 4.9</span><span>286 reviews</span><b>+42 this month</b></div>
      <div className="appointment-row"><CalendarDays size={15} /><span><strong>Next appointment</strong><small>Today, 4:30 PM</small></span><b>Confirmed</b></div>
    </div>
  )
}
