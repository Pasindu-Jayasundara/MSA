import { useState } from 'react'
import CertificateStudio from '../features/certificates/CertificateStudio.jsx'
import EmailSender from '../features/bulk-email/EmailSender.jsx'
import './App.css'

const tools = [
  { id: 'certificates', label: 'Certificates', description: 'Create and export certificates for your participants.' },
  { id: 'email', label: 'Bulk email', description: 'Personalize messages and send or export email drafts.' },
]

export default function App() {
  const [activeTool, setActiveTool] = useState('certificates')
  return <div className="help-tools">
    <header className="help-tools-header">
      <a className="help-tools-brand" href="#home"><span className="help-tools-mark">M</span><span>MSA <b>Help Tools</b></span></a>
    </header>
    <div className="help-tools-layout">
      <aside className="help-tools-sidebar">
        <span className="help-tools-side-label">WORKSPACE</span>
        <nav className="help-tools-nav" aria-label="Help tools">
          {tools.map((tool) => <button key={tool.id} type="button" className={activeTool === tool.id ? 'selected' : ''} onClick={() => setActiveTool(tool.id)}><span className="help-tools-nav-icon">{tool.id === 'certificates' ? '▧' : '✉'}</span>{tool.label}</button>)}
        </nav>
        <div className="help-tools-sidebar-note"><span>?</span><p><b>MSA Help Tools</b><small>Resources for your community workspace.</small></p></div>
        <div className="help-tools-sidebar-credit">Developed by <a href="https://www.kryvazent.com/" target="_blank" rel="noreferrer">Kryvazent</a></div>
      </aside>
      <main className="help-tools-main">
        <div className="help-tools-heading"><span>MSA WORKSPACE</span><h1>{activeTool === 'certificates' ? 'Certificate studio' : 'Bulk email sender'}</h1><p>{tools.find((tool) => tool.id === activeTool)?.description}</p></div>
        {activeTool === 'certificates' ? <CertificateStudio /> : <EmailSender />}
      </main>
    </div>
  </div>
}
