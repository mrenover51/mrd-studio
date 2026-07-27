export function VisualSignature() {
  return (
    <div aria-hidden className="mrd-signature pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="mrd-axis">
        <span className="mrd-axis-light" />
        <span className="mrd-axis-mark mrd-axis-mark-a" />
        <span className="mrd-axis-mark mrd-axis-mark-b" />
        <span className="mrd-axis-mark mrd-axis-mark-c" />
      </div>

      <div className="mrd-orbit mrd-orbit-primary">
        <span className="mrd-orbit-node" />
        <span className="mrd-orbit-cut" />
      </div>
      <div className="mrd-orbit mrd-orbit-secondary">
        <span className="mrd-orbit-node" />
      </div>

      <div className="mrd-copper-halo mrd-copper-halo-a" />
      <div className="mrd-copper-halo mrd-copper-halo-b" />
      <div className="mrd-metal-reflection" />

      <div className="mrd-signature-code">
        <span>MRD / OPTICAL SYSTEM</span>
        <span>35—01</span>
      </div>
    </div>
  );
}
