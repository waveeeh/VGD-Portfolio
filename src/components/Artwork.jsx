export default function Artwork({ type = 'logo', tone = 'blue', label = 'SAMPLE ARTWORK · REPLACE IMAGE' }) {
  return (
    <div className={`artwork artwork--${type} tone--${tone}`} role="img" aria-label={`${type.replaceAll('-', ' ')} sample artwork placeholder`}>
      <div className="artwork-inner">
        {type === 'logo' && <div className="logo-mark"><i /><i /></div>}
        {type === 'booth' && <div className="booth-mark"><div className="booth-board"><span>Space<br />to create.</span><b /></div><div className="booth-counter" /></div>}
        {type === 'packaging' && <div className="package-mark"><span>forma.</span><b>O</b></div>}
        {type === 'print' && <div className="print-mark"><span>Form &amp;<br />feeling.</span><b /></div>}
        {type === 'closure' && <div className="closure-mark" />}
        {type === 'similarity' && <div className="similarity-mark">{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>}
        {type === 'proximity' && <div className="proximity-mark">{[112, 88, 60, 112, 88, 60].map((h, i) => <i key={i} style={{ height: h }} />)}</div>}
        {type === 'symmetry' && <div className="symmetry-mark"><i /><i /></div>}
        {type === 'figure-ground' && <div className="figure-ground-mark"><i /><b /></div>}
        {(type === 'ui' || type === 'ux') && <div className="wireframe-mark"><strong>{type === 'ui' ? 'A little more focus.' : 'From insight to clarity.'}</strong><div>{[1, 2, 3].map((i) => <i key={i}><b /><b /></i>)}</div></div>}
      </div>
      <small className="artwork-label">{label}</small>
    </div>
  )
}
