import { useState } from 'react';
import { Send } from 'lucide-react';
import { usePageMeta } from '../../lib/usePageMeta';
import { messages as initialMessages } from '../../data/portalMock';

export default function PortalMessages() {
  usePageMeta('Messages');
  const [messages] = useState(initialMessages);
  const [activeId, setActiveId] = useState(initialMessages[0]?.id);
  const [reply, setReply] = useState('');

  const active = messages.find((m) => m.id === activeId);

  return (
    <div>
      <h1 className="text-2xl font-bold text-brand-navy mb-6">Messages</h1>
      <div className="rounded border border-brand-border bg-white overflow-hidden grid md:grid-cols-[280px_1fr] min-h-[420px]">
        <div className="border-b md:border-b-0 md:border-r border-brand-border divide-y divide-brand-border">
          {messages.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveId(m.id)}
              className={`w-full text-left px-4 py-3.5 hover:bg-brand-lighter transition-colors ${activeId === m.id ? 'bg-brand-lighter' : ''}`}
            >
              <div className="flex items-center justify-between gap-2">
                <p className={`text-sm ${m.unread ? 'font-bold text-brand-navy' : 'font-medium text-brand-text'}`}>{m.from}</p>
                {m.unread && <span className="w-2 h-2 rounded-full bg-brand-primary shrink-0" aria-label="Unread" />}
              </div>
              <p className="text-xs text-brand-muted mt-0.5 line-clamp-1">{m.preview}</p>
              <p className="text-[11px] text-brand-muted mt-1">{new Date(m.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>
            </button>
          ))}
        </div>

        <div className="p-6 flex flex-col">
          {active ? (
            <>
              <p className="font-bold text-brand-navy">{active.from}</p>
              <p className="mt-3 text-sm text-brand-text leading-relaxed flex-1">{active.preview}</p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setReply('');
                }}
                className="mt-6 flex items-center gap-2 border-t border-brand-border pt-4"
              >
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Type a reply..."
                  className="flex-1 rounded-lg border border-brand-border px-3 py-2.5 text-sm outline-none focus:border-brand-primary"
                />
                <button type="submit" className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center hover:bg-brand-deep transition-colors" aria-label="Send message">
                  <Send className="w-4 h-4" aria-hidden="true" />
                </button>
              </form>
            </>
          ) : (
            <p className="text-sm text-brand-muted">Select a message to view the conversation.</p>
          )}
        </div>
      </div>
    </div>
  );
}
