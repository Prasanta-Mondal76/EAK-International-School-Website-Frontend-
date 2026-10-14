import { useState } from 'react';
import { ImageOff } from 'lucide-react';
/**
 * Image with a graceful branded fallback. If the file is missing or fails
 * to load, a navy/gold gradient placeholder renders instead of a broken icon.
 */
export default function SmartImage({ src, alt, className = '', eager = false }) {
    const [failed, setFailed] = useState(false);
    if (failed) {
        return (<div className={`flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 ${className}`} role="img" aria-label={alt}>
        <div className="flex flex-col items-center gap-2 p-6 text-center">
          <ImageOff className="h-8 w-8 text-gold-500/70"/>
          <span className="font-display text-sm italic text-gold-100/80">EAK International School</span>
        </div>
      </div>);
    }
    return (<img src={src} alt={alt} className={className} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)}/>);
}
