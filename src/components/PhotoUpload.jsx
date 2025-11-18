import React, { useState } from 'react'

export default function PhotoUpload() {
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState('')
  const [status, setStatus] = useState('idle')
  const [url, setUrl] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || ''

  const onFile = (e) => {
    const f = e.target.files?.[0]
    setFile(f || null)
    setUrl('')
    if (f) {
      setPreview(URL.createObjectURL(f))
    } else setPreview('')
  }

  const upload = async (e) => {
    e.preventDefault()
    if (!file) return
    setStatus('uploading')
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch(`${baseUrl}/api/upload-photo`, {
        method: 'POST',
        body: fd,
      })
      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      const publicUrl = `${baseUrl}${data.url}`.replace(/\/$/, '')
      setUrl(publicUrl)
      setStatus('done')
    } catch (e) {
      console.error(e)
      setStatus('error')
    }
  }

  return (
    <section className="relative bg-[#0b0b1b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(106,13,173,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Astral Portrait</h2>
        <p className="mt-2 text-white/80 max-w-2xl">Upload your photo to display aboard the command deck.</p>

        <form onSubmit={upload} className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] items-start">
          <input type="file" accept="image/*" onChange={onFile} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60" />
          <button disabled={!file || status==='uploading'} className="rounded-xl bg-white/90 text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white transition-colors disabled:opacity-60">
            {status==='uploading' ? 'Uploading…' : 'Upload Photo'}
          </button>
        </form>

        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          {preview && (
            <div>
              <div className="text-white/70 text-sm mb-2">Local Preview</div>
              <img src={preview} alt="preview" className="rounded-xl border border-white/10" />
            </div>
          )}
          {url && (
            <div>
              <div className="text-white/70 text-sm mb-2">Uploaded</div>
              <img src={url} alt="uploaded" className="rounded-xl border border-white/10" />
              <p className="mt-2 text-sm break-all text-white/70">{url}</p>
            </div>
          )}
          {status==='error' && (
            <p className="text-red-400">Upload failed. Check backend URL and try again.</p>
          )}
        </div>
      </div>
    </section>
  )
}
